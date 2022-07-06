import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, takeWhile } from 'rxjs';
import { UserdataService } from '../../services/userdata.service';
import { IUser } from '../../interface/user';
import { DataRoutingService } from '../../services/data-routing.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  private componentActive = true
  public id: string;
  public user: IUser;

  constructor(
    private route: ActivatedRoute,
    private userdataService: UserdataService,
    private dataRoutingService: DataRoutingService
  ) { }

  ngOnInit(): void {

    this.route.paramMap
    .pipe(takeWhile(() => this.componentActive))
    .subscribe(params => {
      this.id = params.get('id');
    });

    this.userdataService.getUserByID(this.id)
    .pipe(takeWhile(() => this.componentActive))
    .subscribe(data => {
      this.user = data,
      this.dataRoutingService.pushUser(data)
    });
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

}


