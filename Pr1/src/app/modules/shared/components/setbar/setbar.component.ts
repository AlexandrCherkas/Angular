import { Component, OnInit, Input } from '@angular/core';
import { IFavoriteCards } from 'src/app/modules/shared/interface/favoriteCard';
import { Favotite } from '../../enums/favorite';

@Component({
  selector: 'app-setbar',
  templateUrl: './setbar.component.html',
  styleUrls: ['./setbar.component.scss'],
})
export class SetbarComponent implements OnInit {
  @Input() favorites: Array<IFavoriteCards> = [];
  @Input() entity: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}
}
