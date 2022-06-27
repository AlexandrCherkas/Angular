import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, tap } from 'rxjs';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login-shell',
  templateUrl: './login-shell.component.html',
  styleUrls: ['./login-shell.component.scss']
})
export class LoginShellComponent implements OnInit {

  @Output() loginUser = new EventEmitter<any>();

  parentFormGroup: FormGroup = new FormGroup({});


  constructor(
    private authorizationService: AuthorizationService,
    private router: Router ) {}

  ngOnInit(): void {
  }

  onLoginUser(Form: FormGroup): void {
    this.parentFormGroup.addControl('user', Form)
  }

  submit(): void{
    this.parentFormGroup.markAllAsTouched();
    if (this.parentFormGroup.status == 'VALID') {
      this.authorizationService.verificationUser(this.parentFormGroup.value.user)
        .subscribe(data => {
          if(data){
            this.authorizationService.authorizedUser(data)
            // console.log(this.authorizationService.currentUser())
            this.router.navigate(['/users']);
          }
        });


    }
  }

}