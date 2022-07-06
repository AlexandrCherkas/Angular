import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs';
import { IUser } from '../../interface/user';
import { DataRoutingService } from '../../services/data-routing.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  private componentActive = true;
  public user: IUser;

  public zoom: number = 8;
  public lat
  public lng

  constructor(
    private dataRoutingService: DataRoutingService
  ) {}

  ngOnInit(): void {
    this.dataRoutingService.getCurrentUser()
      .pipe(takeWhile(() => this.componentActive))
      .subscribe(data => {
        this.user = data
        this.lat = data.address[0].coordinates.latitude,
        this.lng = data.address[0].coordinates.longitude
      })
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

}
