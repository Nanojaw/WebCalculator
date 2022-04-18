import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss']
})
export class KeypadComponent implements OnInit {

  @Output() keyEvt = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  key0() { this.keyEvt.emit("0"); }
  key1() { this.keyEvt.emit("1"); }
  key2() { this.keyEvt.emit("2"); }
  key3() { this.keyEvt.emit("3"); }
  key4() { this.keyEvt.emit("4"); }
  key5() { this.keyEvt.emit("5"); }
  key6() { this.keyEvt.emit("6"); }
  key7() { this.keyEvt.emit("7"); }
  key8() { this.keyEvt.emit("8"); }
  key9() { this.keyEvt.emit("9"); }
  keyPoint() { this.keyEvt.emit("."); }
  keyNegate() { this.keyEvt.emit("-"); }

}
