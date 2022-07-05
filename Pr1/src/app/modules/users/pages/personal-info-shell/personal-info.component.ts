import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, takeWhile } from 'rxjs';
import { UserdataService } from '../../services/userdata.service';
import { IUser } from '../../interface/user';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  private componentActive = true
  public id: any;
  public user: Observable <IUser>;

  constructor(
    private route: ActivatedRoute,
    private userdataService: UserdataService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.paramMap
    .pipe(takeWhile(() => this.componentActive))
    .subscribe(params => {
      console.log(params)
      this.id = params.get('');
      console.log(this.id )
    });

    this.userdataService.getUserByID(this.id)
    .pipe(takeWhile(() => this.componentActive))
    .subscribe(data => this.user = data);
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

}


