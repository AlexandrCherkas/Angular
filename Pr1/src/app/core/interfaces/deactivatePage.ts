import { Observable } from 'rxjs';

export interface ICanDeactivatePage {
  canDeactivateMetod:() => Observable <boolean> | Promise <boolean> | boolean;
  hasUnsavedData:() => Observable <boolean> | Promise <boolean> | boolean;
  disablecanDeactivate:() => Observable <boolean> | Promise <boolean> | boolean
}
