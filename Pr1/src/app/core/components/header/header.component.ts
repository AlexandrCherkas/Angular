import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/modules/authorization/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logo: string ="../assets/images/apple-touch-icon.png"
  public user: string;
  public photo: string;

  constructor( private authorizationService: AuthorizationService ) { }

  ngOnInit(): void {
    this.authorizationService.currentUser()
      .subscribe( (data) =>
      { return this.user = data?.['userName'], console.log(data)}
      )
  }

  logOut(): void{
    this.user = ''
  }

  // public get user(): any{
  //   let userDTO =  this.authorizationService.currentUser()
  //   return userDTO.userName

  // }

  // public get userPhoto(): string{
  //   const userDTO =  this.authorizationService.currentUser()
  //   return  userDTO.photo
  // }


}
