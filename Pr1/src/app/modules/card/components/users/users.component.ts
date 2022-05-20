import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  public users : Array <{name: string, age: number, activated ?: boolean }> = [
    { name: "Tom", age: 25, activated: false},
    { name: 'Nick', age: 30, activated: false},
    { name: 'Jack', age: 40, activated: true },
    { name: 'Jon', age: 50, activated: false }
    ];

  constructor() { }

  ngOnInit(): void {
  }

  condition: boolean = true
  statusUser: boolean = true;

  HideAlluser() : void {
    this.condition= !this.condition;
  }

  HideNotActivated() : void {
    this.statusUser = !this.statusUser;
  }

  ActivationUser(i:any) : void {
    if(this.users[i].activated){
      this.users[i].activated = false
    } else {
      this.users[i].activated = true
    }
  }
}






// `<span [id]='${user.name}'> Non-Active  </span> `
