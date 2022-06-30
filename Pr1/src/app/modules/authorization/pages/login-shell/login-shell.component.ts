import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subject, takeWhile, tap } from 'rxjs';
import { AuthorizationService } from '../../services/authorization.service';
import { IAuthUser } from '../../interfaces/IAuthUser';

@Component({
  selector: 'app-login-shell',
  templateUrl: './login-shell.component.html',
  styleUrls: ['./login-shell.component.scss'],
})
export class LoginShellComponent implements OnInit {
  @Output() loginUser = new EventEmitter<any>();

  public parentFormGroup: FormGroup = new FormGroup({});
  public componentActive = true;

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onLoginUser(Form: FormGroup): void {
    this.parentFormGroup.addControl('user', Form);
  }

  submit(): void {
    this.parentFormGroup.markAllAsTouched();

    if (this.parentFormGroup.status == 'VALID') {
      this.authorizationService
        .verificationUser(this.parentFormGroup.value.user)
        .pipe(takeWhile(() => this.componentActive))
        .subscribe((data) => {
          if (data) {
            this.authorizationService.authorizedUser(data)
          } else {
            alert('Please, check the entered data name or password!!');
          }
          this.router.navigate(['/users']);
        });
    }
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
