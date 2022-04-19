import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import * as wasm from './pkg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() expression = '';

  onKeyClicked(key: string) {
    if (key == 'negate') {
      if (this.expression.startsWith('-')) {
        this.expression = this.expression.substring(1);
      } else {
        this.expression = '-' + this.expression;
      }
    } else {
      this.expression += key;
      if(this.expression.length % 45 == 0) {
        this.expression += "\n"
      }
    }
  }

  calculate() {
    alert(this.expression);
  }
}
