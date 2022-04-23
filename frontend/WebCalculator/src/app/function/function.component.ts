import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss'],
})
export class FunctionComponent implements OnInit {
  @Input() name = 'Name';
  @Input() description = 'description';
  @Input() expression = 'expression';

  @Output() addEvt = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  add() {
    this.addEvt.emit(this.expression);
  }
}
