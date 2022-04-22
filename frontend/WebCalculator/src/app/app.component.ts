import {Component, Input} from '@angular/core';
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
      let minusI = this.expression.reverse().indexOf('-', this.cursor)
      let spaceI = this.expression.reverse().indexOf(' ', this.cursor)
      if (minusI > spaceI) {
        this.expression = this.expression.reverse().splice(spaceI, 1, ' -');
        this.cursor++;
      } else {
        this.expression = this.expression.splice(this.expression.indexOf('-'), 1);
        this.cursor--;
      }
    } else if (key == 'remove') {
      this.displayed = this.displayed
        .slice(0, this.cursor - 1)
        .concat(this.displayed.slice(this.cursor));
      if (this.cursor > 0) this.cursor--;
    } else {
      this.displayed = this.displayed
        .slice(0, this.cursor)
        .concat(key, this.displayed.slice(this.cursor));
      this.cursor += key.length;
    }

    this.display()
  }

  calculate() {
    console.log(wasm.parse_regular_stuff(this.expression.join('')));
  }

  move(direction: boolean) {
    if (direction) {
      if (this.displayed.length > this.cursor) this.cursor++;
    } else {
      if (this.cursor > 0) this.cursor--;
    }

    // Insert cursor
    this.displayed = this.displayed.replace(/</g, '');
    this.displayed = this.displayed
      .slice(0, this.cursor)
      .concat('<', this.displayed.slice(this.cursor));
  }

  clear() {
    this.displayed = '<';
    this.expression = [];
  }

  display() {
    this.displayed = this.expression.join('').replace(' ', '');

    // Insert cursor
    this.displayed = this.displayed.replace(/</g, '');
    this.displayed = this.displayed
      .slice(0, this.cursor)
      .concat('<', this.displayed.slice(this.cursor));
  }
}
