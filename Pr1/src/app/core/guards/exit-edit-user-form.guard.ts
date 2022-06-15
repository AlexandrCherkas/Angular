import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EditUserComponent } from 'src/app/modules/users/components/edit-user/edit-user.component';

@Injectable({
  providedIn: 'root'
})
export class ExitEditUserFormGuard implements CanDeactivate <EditUserComponent> {
  canDeactivate(
    component: EditUserComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable <boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return !component.hasUnsavedData() || confirm("You have some unsaved changes and it will be lost. Do you want to leave the page?");
  }

}
