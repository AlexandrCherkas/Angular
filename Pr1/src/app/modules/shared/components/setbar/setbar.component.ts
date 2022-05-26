import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-setbar',
  templateUrl: './setbar.component.html',
  styleUrls: ['./setbar.component.scss']
})
export class SetbarComponent implements OnInit {

  @Input() usersLikes : any;
  @Input() carsLikes: [] = []

  constructor() { }

  ngOnInit(): void {
    console.log(this.usersLikes)
  }

}
