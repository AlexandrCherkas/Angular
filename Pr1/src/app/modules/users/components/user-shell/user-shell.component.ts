import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { IUser } from 'src/app/interfaces/user';


@Component({
  selector: 'app-user-shell',
  templateUrl: './user-shell.component.html',
  styleUrls: ['./user-shell.component.scss']
})
export class UserShellComponent implements OnInit {

  public users: IUser[] = [];

  constructor(public usersService: UserdataService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    console.log(this.users)
  }

}
