import { Injectable } from '@angular/core';
import { ICar } from 'src/app/interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CardataService {

  constructor() { }

  public getUsers(): ICar[] {
    return [
      {
        id: 100000,
        name: 'Ford',
        color: 'White',
        releaseYear: 2016,
        number: 4546,
        imageUrl: '',

       },
       {
        id: 100000,
        name: 'Ford',
        color: 'White',
        releaseYear: 2016,
        number: 4546,
        imageUrl: '',
       },
       {
        id: 100000,
        name: 'Ford',
        color: 'White',
        releaseYear: 2016,
        number: 4546,
        imageUrl: '',
       },
       {
        id: 100000,
        name: 'Ford',
        color: 'White',
        releaseYear: 2016,
        number: 4546,
        imageUrl: '',
       }

    ];

  }
}



