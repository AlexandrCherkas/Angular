import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  private componentActive = true;
  public id;
  public user;

  constructor(
    private route: ActivatedRoute,
    private userdataService: UserdataService,
  ) { }

  ngOnInit(): void {

  //   this.route.paramMap
  //   .pipe(takeWhile(() => this.componentActive))
  //   .subscribe(params => {
  //     this.id = params.get('id');
  //   });

  //   this.userdataService.getUserByID(this.id)
  //   .pipe(takeWhile(() => this.componentActive))
  //   .subscribe(data => {this.user = data,
  //   console.log(data)});
  // }

}

}
