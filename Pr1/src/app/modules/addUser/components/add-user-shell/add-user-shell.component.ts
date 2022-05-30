import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.scss']
})
export class AddUserShellComponent implements OnInit {

  company: string = ''
  departament: string = ''
  firstName: string = ''
  secondName: string = ''
  age!: number

  constructor() { }

  ngOnInit(): void {
  }

  toCompanyEvent(value: string){
    this.company = value
    console.log(this.company)
  }
  toDepartament(value: string){
    this.departament = value
    console.log(this.departament)
  }
  toFirstName(value: string){
    this.firstName = value
    console.log(this.firstName)
  }
  toSecondName(value: string){
    this.secondName = value
    console.log(this.secondName)
  }

  toAge(value: number){
    this.age = value
    console.log(this.age)
  }

}
