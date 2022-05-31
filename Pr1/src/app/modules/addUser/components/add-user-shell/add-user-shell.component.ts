import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserdataService } from 'src/app/modules/users/services/userdata.service';
import { IUser } from 'src/app/modules/users/interface/user';

@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.scss'],
})
export class AddUserShellComponent implements OnInit {
  users: IUser[] = [];
  newUser!: IUser;

  public id!: number;
  public name!: string;
  public secondName!: string;
  public age!: number;
  public gender!: boolean;
  public departament!: string;
  public company!: string;
  public imageUrl: string =
    'http://s1.iconbird.com/ico/2013/6/382/w256h2561372594116ManRed2.png';


  constructor(public userdataService: UserdataService) {}

  ngOnInit(): void {
    this.users = this.userdataService.getUsers();
  }
  toCompanyEvent(value: string) {
    this.company = value;
  }
  toDepartament(value: string) {
    this.departament = value;
  }
  toFirstName(value: string) {
    this.name = value;
  }
  toSecondName(value: string) {
    this.secondName = value;
  }
  toAge(value: number) {
    this.age = value;
  }
  toGender(value: boolean) {
    this.gender = value;
  }

  addUsertoBD(): void {
    this.newUser = {
      id: this.id,
      name: this.name,
      secondName: this.secondName,
      age: this.age,
      gender: this.gender,
      departament: this.departament,
      company: this.company,
      imageUrl: this.imageUrl,
    };
    this.userdataService.setUser(this.newUser);
    console.log(this.newUser)
  }

}
