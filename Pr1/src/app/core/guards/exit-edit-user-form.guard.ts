import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EditUserComponent } from 'src/app/modules/users/components/edit-user/edit-user.component';
import { DialogLeavePageComponent } from 'src/app/modules/shared/components/dialog-leave-page/dialog-leave-page.component';


@Injectable({
  providedIn: 'root'
})

export class ExitEditUserFormGuard implements CanDeactivate <EditUserComponent> {



  canDeactivate(
    component: EditUserComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable <boolean | UrlTree> | Promise <boolean | UrlTree> | boolean | UrlTree {



    return !component.hasUnsavedData() || !component.showW();
  }



}
