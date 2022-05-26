import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() oneOfTheUser: any;
  @Input() userlikesStatus: string = "primary"
  constructor() { }

  ngOnInit(): void {
  }

  isLikes(oneOfTheUse: IUser):void {
    if( this.userlikesStatus == "primary"){
      this.userlikesStatus = "warn"
    } else{
      this.userlikesStatus = "primary"
    }
  }
}