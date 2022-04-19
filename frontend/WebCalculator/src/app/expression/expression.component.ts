import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.scss']
})
export class ExpressionComponent implements OnInit {

  @Input() expression = "";

  constructor() { }

  ngOnInit(): void {
  }
}
