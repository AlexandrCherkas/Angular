import { Injectable } from '@angular/core';
import {  UrlTree, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import { ICanDeactivatePage } from '../interfaces/deactivatePage';
import { ModalService } from '../services/modal.service';



@Injectable({
  providedIn: 'root'
})

export class LeaveEditUserFormGuard implements CanDeactivate<ICanDeactivatePage> {

  constructor(private modalService:  ModalService ){
  }
  canDeactivate(
    component:ICanDeactivatePage): Observable <boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return component.canDeactivateMetod() ?  this.modalService.showLeavePageDialog() : true
  }

}
