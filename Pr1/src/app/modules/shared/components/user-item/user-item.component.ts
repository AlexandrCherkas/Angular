import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Output() onChanged = new EventEmitter<boolean>();
  @Output() onlog = new EventEmitter<boolean>();

  change(increased: any) {
    this.onChanged.emit(increased);
  }

  log(): void {
    this.onlog.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
