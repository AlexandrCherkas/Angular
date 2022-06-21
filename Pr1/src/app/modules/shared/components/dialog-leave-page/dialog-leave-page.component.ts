import { Component, Output } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal.service';


@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-leave-page.component.html',
})

export class DialogAnimationsExampleDialog  {

  constructor(public dialogRef: MatDialogRef <DialogAnimationsExampleDialog>) {}

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}




