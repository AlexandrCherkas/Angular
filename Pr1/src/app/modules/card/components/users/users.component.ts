import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserDataService } from 'src/app/modules/services/user-data.service';
import { ViewChild } from '@angular/core';
import { UserComponent } from 'src/app/modules/shared/components/user/user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserDataService],
})
export class UsersComponent implements OnInit {
  public users: IUser[] = [];

  public condition: boolean = true;
  public statusUser: boolean = true;

  @ViewChild(UserComponent)
  userComponent: UserComponent = new UserComponent();

  constructor(public usersService: UserDataService) {
    this.users = usersService.getUsers();
  }

  deactivateAllUsers(users: IUser[]): void {
    users.forEach((user, index) => {
      users[index] = this.userComponent.deactivateUser(user);
    });
  }

  ngOnInit(): void {}

  hideAllUser(): void {
    this.condition = !this.condition;
  }
}
