import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import { EditUserComponent } from 'src/app/modules/users/components/edit-user/edit-user.component';


export interface CanDeactivatePage {
  canDeactivateMetod:() => Observable <boolean> | Promise <boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})

export class LeaveEditUserFormGuard implements CanDeactivate<CanDeactivatePage> {
  canDeactivate(
    component:CanDeactivatePage): Observable <boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log(component.canDeactivateMetod())
    return component.canDeactivateMetod()

  }

}
