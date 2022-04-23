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
    this.expression = this.expression
      .slice(0, this.cursor - 1)
      .concat(this.expression.slice(this.cursor));
    if (this.cursor > 0) {
      this.cursor--;
    }
  }

  display() {
    // Insert cursor
    this.expression = this.expression.replace(/</g, '');
    this.expression = this.expression
      .slice(0, this.cursor)
      .concat('<', this.expression.slice(this.cursor));
  }

  calculate() {
    alert(wasm.parse_regular_stuff('1.0+1.0'));
  }
}
