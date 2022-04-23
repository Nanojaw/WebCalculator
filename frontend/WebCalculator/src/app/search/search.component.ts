import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {func, funcs} from '../funcs'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  functions = funcs;

  @Output() addEvt = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  add(expression: string) {
    this.addEvt.emit(expression);
  }
}
