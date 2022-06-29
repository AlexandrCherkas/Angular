import { Component, OnInit } from '@angular/core';
import { IAuthUser } from 'src/app/modules/authorization/interfaces/IAuthUser';
import { AuthorizationService } from 'src/app/modules/authorization/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logo: string = "../assets/images/apple-touch-icon.png"
  public user: string;
  public photo: string;

  constructor( private authorizationService: AuthorizationService ) { }

  ngOnInit(): void {

    this.authorizationService.getCurrentUser()
      .pipe()
      .subscribe((data) => {
        console.log(data)
        this.user = data.username, this.photo = "../assets/images/user.png"
        }
      )
  }


  logOut(): void{
    this.user = undefined;
    this.photo = undefined;
  }

}
