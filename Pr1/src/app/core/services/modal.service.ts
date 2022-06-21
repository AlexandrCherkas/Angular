import { Injectable } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { DialogAnimationsExampleDialog } from 'src/app/modules/shared/components/dialog-leave-page/dialog-leave-page.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) { }

  showLeavePageDialog(): any {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, { width: '400px' })
    return dialogRef.afterClosed() ;
  }
}
