import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-data',
  templateUrl: './set-data.component.html',
  styleUrls: ['./set-data.component.scss']
})
export class SetDataComponent implements OnInit {

  public inputStr  = 'You can enter anything';

  constructor() { }

  ngOnInit(): void {
  }

}
