import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  users : Array <{name: string, age: number, activated: boolean }> = [
    { name: "Tom", age: 25, activated: true },
    { name: 'Nick', age: 30, activated: false },
    { name: 'Jack', age: 40, activated: true },
    { name: 'Jon', age: 50, activated: false }
    ]

  constructor() { }

  ngOnInit(): void {
  }




}

// let User = document.querySelector(".user");
