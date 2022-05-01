import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {func, funcs} from '../funcs'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  functions = funcs;

  search = '';

  @Output() addEvt = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  add(expression: string) {
    this.addEvt.emit(expression);
  }

  submit(event: KeyboardEvent) {
    if (event.key == 'Enter') {
      this.functions.sort()
    }
  }
}
