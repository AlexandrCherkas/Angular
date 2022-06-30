import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, take, takeWhile } from 'rxjs';
import { AuthorizationService } from 'src/app/modules/authorization/services/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class AllowEntryGuard implements CanActivate {

  constructor(
    private authorization: AuthorizationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    if (this.authorization.checkAuthUser()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
