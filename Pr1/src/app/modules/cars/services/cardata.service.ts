import { Injectable } from '@angular/core';
import { ICar } from 'src/app/interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CardataService {

  constructor() { }

  public getCars(): ICar[] {
    return [
      {
        id: 100000,
        name: 'Ford',
        color: 'White',
        releaseYear: 1969,
        number: 4546,
        imageUrl: 'https://www.allcarz.ru/wp-content/uploads/2019/11/foto-ringbrothers-mach-1_05.jpg',

       },
       {
        id: 200000,
        name: 'Volkswagen',
        color: 'Red',
        releaseYear: 2020,
        number: 3565,
        imageUrl: 'https://www.allcarz.ru/wp-content/uploads/2013/08/foto-vw-golf-7-r_02-650x433.jpg',
       },
       {
        id: 300000,
        name: 'Audi',
        color: 'Green',
        releaseYear: 1994,
        number: 1234,
        imageUrl: 'https://auto.vercity.ru/gallery/img/automobiles/Audi/1995%20Audi%20RS2%20Avant%20Tropic%20Green%20(8C_B4)/900x/1565772642.jpg',
       },
       {
        id: 400000,
        name: 'Volvo',
        color: 'Black',
        releaseYear: 2022,
        number: 43534,
        imageUrl: 'https://www.allcarz.ru/wp-content/uploads/2021/05/foto-s90-2022_00.jpg',
       }

    ];

  }


}



