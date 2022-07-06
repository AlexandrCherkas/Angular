import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs';
import { DataRoutingService } from '../../services/data-routing.service';
import { IUser } from '../../interface/user';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  private componentActive = true;
  public user;

  constructor(
    private dataRoutingService: DataRoutingService
  ) {}

  ngOnInit(): void {
    this.dataRoutingService.getCurrentUser()
      .pipe(takeWhile(() => this.componentActive))
      .subscribe(data => this.user = data)
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

}
