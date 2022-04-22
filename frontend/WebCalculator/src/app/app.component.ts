import { Component, Input } from '@angular/core';
import * as wasm from './pkg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() expression = '<';

  cursor = 0;

  onKeyClicked(key: string) {
    if (key == 'negate') {
      if (this.expression.startsWith('-')) {
        this.expression = this.expression.slice(1);
        this.cursor--;
      } else {
        this.expression = '-' + this.expression;
        this.cursor++;
      }
    } else if (key == 'remove') {
      this.expression = this.expression
        .slice(0, this.cursor - 1)
        .concat(this.expression.slice(this.cursor));
      if (this.cursor > 0) this.cursor--;
    } else {
      this.expression = this.expression
        .slice(0, this.cursor)
        .concat(key, this.expression.slice(this.cursor));
      this.cursor++;
    }

    // Insert cursor
    this.expression = this.expression.replace(/</g, '');
    this.expression = this.expression
      .slice(0, this.cursor)
      .concat('<', this.expression.slice(this.cursor));
  }

  calculate() {

    alert(this.expression);
    console.log(wasm.parse_regular_stuff("1 + 1"));
  }

  move(direction: boolean) {
    if (direction) {
      if (this.expression.length > this.cursor) this.cursor++;
    } else {
      if (this.cursor > 0) this.cursor--;
    }

    // Insert cursor
    this.expression = this.expression.replace(/</g, '');
    this.expression = this.expression
      .slice(0, this.cursor)
      .concat('<', this.expression.slice(this.cursor));
  }

  clear() {
    this.expression = '<';
  }
}
