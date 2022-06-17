import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import { EditUserComponent } from 'src/app/modules/users/components/edit-user/edit-user.component';


export interface CanDeactivatePage {
  canDeactivateMetod:() => Observable <boolean> | Promise <boolean> | boolean;
  hasUnsavedData:() => Observable <boolean> | Promise <boolean> | boolean;
  disablecanDeactivate:() => Observable <boolean> | Promise <boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})

export class LeaveEditUserFormGuard implements CanDeactivate<CanDeactivatePage> {

  canDeactivate(
    component:CanDeactivatePage): Observable <boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return component.disablecanDeactivate() ? true :  !component.hasUnsavedData() || component.canDeactivateMetod()

  }

}
