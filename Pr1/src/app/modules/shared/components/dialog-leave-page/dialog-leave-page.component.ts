import { Component, Output } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dialog-leave-page',
  template: '',
  styleUrls: ['./dialog-leave-page.component.scss'],

})

export class DialogLeavePageComponent {

  popupAnswer$: Observable<boolean>

  constructor( public dialog: MatDialog ) {}

   openDialog(): any {
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, { width: '400px' })
    this.popupAnswer$ = dialogRef.afterClosed() ;
    return this.popupAnswer$
  }

}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-leave-page.component.html',
})

export class DialogAnimationsExampleDialog {

  constructor(public dialogRef: MatDialogRef <DialogAnimationsExampleDialog> ) {}

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}




