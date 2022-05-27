import { Component, OnInit, Input } from '@angular/core';
import { IFavoriteCards } from 'src/app/interfaces/favoriteCard';
import { Favotite } from '../../enums/favorite';

@Component({
  selector: 'app-setbar',
  templateUrl: './setbar.component.html',
  styleUrls: ['./setbar.component.scss']
})
export class SetbarComponent implements OnInit {

  @Input() favorites: Array<IFavoriteCards> = [];
  @Input() favoriteType!: Favotite;

  constructor() { }

  ngOnInit(): void {
  }


}
