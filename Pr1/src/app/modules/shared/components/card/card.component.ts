import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { fromEvent, mergeMap, of, switchMap } from 'rxjs';
import { ICar } from 'src/app/modules/cars/interface/car';
import { IUser } from 'src/app/modules/users/interface/user';
import { UserdataService } from 'src/app/modules/users/services/userdata.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() isLikes!: boolean;
  @Input() image!: string;
  @Input() id!: any;

  @Output() toFavoriteEvent = new EventEmitter();
  @Output() toSaveEvent = new EventEmitter();
  @Output() toEditEvent = new EventEmitter();
  @Output() toExportToExcelEvent = new EventEmitter();


  constructor() {}

  ngOnInit(): void {}

  addToFavorite(): void {
    this.toFavoriteEvent.emit();
    this.isLikes = !this.isLikes;
  }

  save(): void {
    this.toSaveEvent.emit();
  }

  exportToExcel(): void {
    this.toExportToExcelEvent.emit();
  }

  edit(): void{
    this.toEditEvent.emit();
  }
  // [routerLink] = "['/user/edit', id]"

}
