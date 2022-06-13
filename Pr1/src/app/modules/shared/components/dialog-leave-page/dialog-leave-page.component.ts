import { Component } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-leave-page',
  template: '',
  styleUrls: ['./dialog-leave-page.component.scss'],

})

export class DialogLeavePageComponent {

  constructor( public dialog: MatDialog ) {}

   openDialog(): void {
   this.dialog.open(DialogAnimationsExampleDialog, {
      width: '400px'
    });
  }

}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-leave-page.component.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef <DialogAnimationsExampleDialog> ) {}

  onNoClick(): boolean{
    console.log('False')
    return false
  }

  onOkClick(): boolean{
    console.log('True')
    return true
  }

}




