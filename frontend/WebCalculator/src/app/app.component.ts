import { Component, Input } from '@angular/core';
import * as wasm from './pkg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() displayed = '<';

  expression: string[] = [];

  cursor = 0;

  onKeyClicked(key: string) {
    if (key == 'negate') {
      let reverse = this.expression.reverse();
      let minusI =
        reverse.indexOf('-', reverse.length + 1 - this.cursor) == -1
          ? reverse.length
          : reverse.indexOf('-', reverse.length + 1 - this.cursor);
      let spaceI =
        reverse.indexOf(' ', reverse.length + 1 - this.cursor) == -1
          ? reverse.length
          : reverse.indexOf(' ', reverse.length + 1 - this.cursor);

      console.log(reverse)

      if (minusI >= spaceI) {
        this.expression = reverse
          .slice(0, spaceI)
          .concat('-', reverse.slice(spaceI))
          .reverse();
        this.cursor += 2;
      } else {
        this.expression = reverse
          .slice(0, minusI)
          .concat(reverse.slice(minusI + 1))
          .reverse();
        this.cursor -= 2;
      }
    } else if (key == 'remove') {
      this.expression = this.expression
        .slice(0, this.cursor - 1)
        .concat(this.expression.slice(this.cursor));
      if (this.cursor > 0) {
        this.cursor--;
      }
    } else {
      this.expression = this.expression
        .slice(0, this.cursor)
        .concat(key, this.expression.slice(this.cursor));
      this.cursor++;
    }

    this.display();
  }

  calculate() {
    alert(wasm.parse_regular_stuff(this.expression.join('')));
  }

  move(direction: boolean) {
    if (direction) {
      if (this.displayed.length > this.cursor) {
        this.cursor++;
        //if(this.expression[this.cursor] == ' ') this.cursor++;
      }
    } else {
      if (this.cursor > 0) {
        this.cursor--;
        //if(this.expression[this.cursor] == ' ') this.cursor--;
      }
    }

    this.display();
  }

  clear() {
    this.displayed = '<';
    this.expression = [];

    this.cursor = 0;
  }

  display() {
    this.displayed = this.expression.join('').replace(/ /g, '');

    // Insert cursor
    this.displayed = this.displayed.replace(/</g, '');
    this.displayed = this.displayed
      .slice(0, this.cursor)
      .concat('<', this.displayed.slice(this.cursor));
  }
}
