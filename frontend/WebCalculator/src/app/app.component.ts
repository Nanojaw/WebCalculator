import { Component, Input } from '@angular/core';
import * as wasm from './pkg';
import { backend } from '../../backend/backend';

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
    } else if (this.cursor > 0) this.cursor--;

    this.display();
  }

  clear() {
    this.expression = '<';
    this.cursor = 0;
  }

  remove() {
    let char = this.expression[this.cursor - 1];

    if (!isNaN(Number(char))) {
      this.expression = this.expression
        .slice(0, this.cursor - 1)
        .concat(this.expression.slice(this.cursor));
      if (this.cursor > 0) {
        this.cursor--;
      }
    } else if (char == '(') {
      //TODO: Fix bugs with ((<()()))

      let pairIndex = 0;

      let pairs = 1;
      let open = this.cursor;
      let close = this.cursor;
      while (pairs > 0) {
        pairIndex = close;

        open =
          this.expression.indexOf('(', open + 1) > 0
            ? this.expression.indexOf('(', open + 1)
            : this.expression.length;
        close =
          this.expression.indexOf(')', close + 1) > 0
            ? this.expression.indexOf(')', close + 1)
            : this.expression.length;

        console.log(open);
        console.log(close);

        open < close ? pairs++ : pairs--;
      }

      if (pairIndex == this.cursor)
        pairIndex = this.expression.indexOf(')', this.cursor);

      this.expression = this.expression
        .slice(0, this.cursor - 1)
        .concat(this.expression.slice(pairIndex + 1));
      this.cursor--;
    }

    this.display();
  }

  display() {
    // Insert cursor
    this.expression = this.expression.replace(/</g, '');
    this.expression = this.expression
      .slice(0, this.cursor)
      .concat('<', this.expression.slice(this.cursor));
  }

  calculate() {
    this.result = wasm
      .parse_regular_stuff(this.expression.replace(/</, ''))
      .toString();

    this.history.push(this.expression.replace(/</, ''));
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
