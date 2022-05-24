import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
// import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  @Input() oneOfTheUser: any;
  @Output() toggleActivation = new EventEmitter<boolean>();

  likes: number = 0;
  dislikes: number = 0;

  message: string = 'Hi guys!';

  onChanged(increased: any) {
    increased == true ? this.likes++ : this.dislikes++;
  }

  onlog(): void {
    alert(this.message);
  }

  constructor() {}

  ngOnInit(): void {}

  deactivateUser(user: IUser): IUser {
    user.age > 18
      ? (user = { name: user.name, age: user.age, activated: false })
      : '';
    this.oneOfTheUser = user;
    return user;
  }
}
