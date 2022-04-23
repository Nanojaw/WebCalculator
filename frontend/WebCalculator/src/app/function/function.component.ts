import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss']
})
export class FunctionComponent implements OnInit {

  @Input() name = 'Name'
  @Input() description = 'description';

  constructor() {
  }

  ngOnInit(): void {
  }

}
