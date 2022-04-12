import { Component } from '@angular/core';
import * as wasm from "./pkg";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'L';

  add(a: number, b: number): void {
    this.title = wasm.add(2, 2).toString()
  }
}
