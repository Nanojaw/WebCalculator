import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { func, funcs } from '../funcs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  functions = funcs;

  search = '';

  @Output() addEvt = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  add(expression: string) {
    this.addEvt.emit(expression);
  }

  submit(event: KeyboardEvent) {
    if (event.key == 'Enter') {
      // TODO Piping
    }
    else if (event.key == 'Backspace') this.search = this.search.slice(0, this.search.length - 1);
    else if (/[a-z]/.test(event.key)) this.search = this.search.concat(event.key);
  }
}
