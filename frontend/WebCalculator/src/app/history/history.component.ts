import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  @Input() history: string[] = [];

  @Output() clickedHistory = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  selected(action: string) {
    this.clickedHistory.emit(action);
  }
}
