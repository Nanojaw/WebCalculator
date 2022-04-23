import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss'],
})
export class KeypadComponent implements OnInit {
  @Output() keyEvt = new EventEmitter<string>();

  @Output() moveEvt = new EventEmitter<boolean>();

  @Output() calcEvt = new EventEmitter<null>();
  @Output() clearEvt = new EventEmitter<null>();
  @Output() removeEvt = new EventEmitter<null>();

  constructor() {}

  ngOnInit(): void {}

  calculate() {
    this.calcEvt.emit();
  }

  left() {
    this.moveEvt.emit(false);
  }

  right() {
    this.moveEvt.emit(true);
  }

  clear() {
    this.clearEvt.emit();
  }

  remove() {
    this.removeEvt.emit();
  }

  //region Basic keys
  key0() {
    this.keyEvt.emit('0');
  }

  key1() {
    this.keyEvt.emit('1');
  }

  key2() {
    this.keyEvt.emit('2');
  }

  key3() {
    this.keyEvt.emit('3');
  }

  key4() {
    this.keyEvt.emit('4');
  }

  key5() {
    this.keyEvt.emit('5');
  }

  key6() {
    this.keyEvt.emit('6');
  }

  key7() {
    this.keyEvt.emit('7');
  }

  key8() {
    this.keyEvt.emit('8');
  }

  key9() {
    this.keyEvt.emit('9');
  }

  keyPoint() {
    this.keyEvt.emit('.');
  }

  keyParenthesis() {
    this.keyEvt.emit('()');
  }

  keyDivide() {
    this.keyEvt.emit('/');
  }

  keyMultiply() {
    this.keyEvt.emit('*');
  }

  keySubtract() {
    this.keyEvt.emit('-');
  }

  keyAdd() {
    this.keyEvt.emit('+');
  }

  //endregion
}
