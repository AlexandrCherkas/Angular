import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { UserdataService } from '../../services/userdata.service';
import { DataRoutingService } from '../../services/data-routing.service';
import { IUser } from '../../interface/user';
@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  private componentActive = true;
  public user;

  constructor(
    private dataRoutingService: DataRoutingService
  ) {}

  ngOnInit(): void {
    this.dataRoutingService.getCurrentUser()
      .pipe(takeWhile(() => this.componentActive))
      .subscribe(data => {
        this.user = data,
        console.log(data)
      })
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
