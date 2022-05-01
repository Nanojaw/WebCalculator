import { Component, Input } from '@angular/core';
import * as wasm from './pkg';

//import * as backend from '../../backend/backend'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() expression = '<';

  cursor = 0;
  result = '';
  history: string[] = [];

  onKeyClicked(key: string) {
    this.expression = this.expression
      .slice(0, this.cursor)
      .concat(key, this.expression.slice(this.cursor));
    this.cursor++;
    this.display();
  }

  move(direction: boolean) {
    if (direction) {
      // -1 to clamp to successfully
      if (this.expression.length - 1 > this.cursor) this.cursor++;

      // Null-coalescing because undefined is between a and z according to RegExp
      if (/[a-z]/.test(this.expression[this.cursor + 1] ?? '')) {
        console.log(this.expression[this.cursor + 1]);
        this.cursor = this.expression.indexOf('(', this.cursor);
      }
    } else if (this.cursor > 0) {
      this.cursor--;

      if (/[a-z]/.test(this.expression[this.cursor - 1] ?? '')) {
        this.cursor = this.findFuncStart(this.cursor - 1);
      }
    }

    this.display();
  }

  clear() {
    this.expression = '<';
    this.cursor = 0;
  }

  remove() {
    let char = this.expression[this.cursor - 1];

    // If number, remove it
    if (!isNaN(Number(char))) {
      this.expression = this.expression
        .slice(0, this.cursor - 1)
        .concat(this.expression.slice(this.cursor));
      if (this.cursor > 0) {
        this.cursor--;
      }
    }
    // Special symbols symbols
    else if (
      char == '+' ||
      char == '-' ||
      char == '*' ||
      char == '/' ||
      char == '.'
    ) {
      this.expression = this.expression
        .slice(0, this.cursor - 1)
        .concat(this.expression.slice(this.cursor));
      if (this.cursor > 0) {
        this.cursor--;
      }
    }
    // Opening parenthesis
    else if (char == '(') {
      // Pair closing parenthesis index
      let pairIndex = 0;

      // Find the matching closing parenthesis
      let pairs = 1;
      for (let i = this.cursor; i < this.expression.lastIndexOf(')') + 1; i++) {
        if (this.expression[i] == '(') pairs++;
        else if (this.expression[i] == ')') pairs--;

        if (pairs == 0) {
          pairIndex = i;
          break;
        }
      }

      // Allow changing starting point
      let start = this.cursor - 1;
      // If linked to a function, remove function
      if (/[a-z]/.test(this.expression[this.cursor - 2])) {
        start = this.findFuncStart(this.cursor - 2);
      }

      // Remove it
      this.expression = this.expression
        .slice(0, start)
        .concat(this.expression.slice(pairIndex + 1));
      this.cursor = start;
    }
    // Closing parenthesis
    else if (char == ')') {
      let pairIndex = 0;

      let pairs = 1;
      // Subtracting 2 to skip first closing, since that happens with the opening by default
      for (let i = this.cursor - 2; i > this.expression.indexOf('(') - 1; i--) {
        if (this.expression[i] == ')') pairs++;
        else if (this.expression[i] == '(') pairs--;

        if (pairs == 0) {
          pairIndex = i;
          break;
        }
      }

      if (/[a-z]/.test(this.expression[pairIndex - 1])) {
        pairIndex = this.findFuncStart(pairIndex - 1);
      }

      this.expression = this.expression
        .slice(0, pairIndex)
        .concat(this.expression.slice(this.cursor));

      // Move cursor to correct spot
      this.cursor -= this.cursor - pairIndex;
    }
    // Functions
    /*
  else if (/^[a-z]/.test(char)) {
    // find end of word
    let end = 0;
    while (
      /^[a-z]/.test(this.expression[end]) &&
      end > this.expression.length
    ) {
      end++;
    }

    let start = this.findFuncStart(end);

    let pairIndex = 0;
    let pairs = 0;
    for (let i = this.expression.indexOf('(', end); i < this.expression.lastIndexOf(')') + 1; i++) {
      if (this.expression[i] == '(') pairs++;
      else if (this.expression[i] == ')') pairs--;

      if (pairs == 0) {
        pairIndex = i;
        break;
      }
    }
    this.expression = this.expression
      .slice(0, start)
      .concat(this.expression.slice(pairIndex + 1));
    this.cursor = start;
  }
  */

    this.display();
  }

  findFuncStart(end: number): number {
    let i = end;
    while (/[a-z]/.test(this.expression[i]) && i > -1) {
      i--;
    }
    // Add one due to TS executing while too many times
    return i + 1;
  }

  display() {
    // Insert cursor
    this.expression = this.expression.replace(/</g, '');
    this.expression = this.expression
      .slice(0, this.cursor)
      .concat('<', this.expression.slice(this.cursor));
  }

  calculate() {
    try {
      this.result = wasm
        .parse_regular_stuff(this.expression.replace(/</, ''))
        .toString();
      this.history.push(this.expression.replace(/</, ''));
    } catch (err) {
      this.result = 'ERROR';
      this.expression = '<';
      this.cursor = 0;
    }
  }

  addExpr(func: string) {
    this.expression = this.expression
      .slice(0, this.cursor)
      .concat(func, this.expression.slice(this.cursor));
    this.cursor += func.indexOf('(') + 1;
    this.display();
  }

  pasteHistory(action: string) {
    this.expression = action;
    this.cursor = action.length;
    this.display();
  }
}
