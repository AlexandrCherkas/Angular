import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, take, takeWhile } from 'rxjs';
import { AuthorizationService } from 'src/app/modules/authorization/services/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class AllowEntryGuard implements CanActivate {

  isUserLogged: boolean = false;

  private componentActive = true;

  constructor(private authorization: AuthorizationService) {

    this.authorization.getCurrentUser()
    .pipe(takeWhile(()=> this.componentActive))
    .subscribe((data) => {
      return data ? this.isUserLogged = true : this.isUserLogged = false;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    return this.isUserLogged;
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
