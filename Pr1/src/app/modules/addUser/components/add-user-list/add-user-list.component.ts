import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user-list',
  templateUrl: './add-user-list.component.html',
  styleUrls: ['./add-user-list.component.scss']
})
export class AddUserListComponent implements OnInit {

  public favoriteSeason: string = '';
  public seasons: string[] = ['Male', 'Female'];

  @Output() toFirstNameEvent = new EventEmitter();
  @Output() toSecondNameEvent = new EventEmitter();
  @Output() toCompanyEvent = new EventEmitter();
  @Output() toDepartamentEvent = new EventEmitter();
  @Output() toAgeEvent = new EventEmitter();
  @Output() toGenderEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  setCompany($event: any){
    this.toCompanyEvent.emit($event.target.value)
  }

  setDepartament($event: any): void{
    this.toDepartamentEvent.emit($event.target.value)
  }

  setFirstName($event: any): void{
    this.toFirstNameEvent.emit($event.target.value)
  }

  setSecondName($event: any): void{
    this.toSecondNameEvent.emit($event.target.value)
  }
  setAge($event: any): void{
    this.toAgeEvent.emit($event.target.value)
  }
  setGender($event: any): void{
    this.toGenderEvent.emit($event.value)
  }
}
