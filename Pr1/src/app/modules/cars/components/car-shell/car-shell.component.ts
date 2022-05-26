import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/interfaces/car';
import { CardataService } from '../../services/cardata.service';

@Component({
  selector: 'app-car-shell',
  templateUrl: './car-shell.component.html',
  styleUrls: ['./car-shell.component.scss']
})
export class CarShellComponent implements OnInit {


  public cars: ICar[] = []

  constructor(public carService: CardataService) { }

  ngOnInit(): void {
    this.cars = this.carService.getCars()
    console.log(this.cars)
  }

}

export enum Direction {
  likes,
  dislikes
}
console.log(Direction)
