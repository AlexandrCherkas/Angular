import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { IAuthUser } from '../../interfaces/IAuthUser';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-registration-shell',
  templateUrl: './registration-shell.component.html',
  styleUrls: ['./registration-shell.component.scss']
})
export class RegistrationShellComponent implements OnInit {

  public parentFormGroup: FormGroup = new FormGroup({});
  private componentActive = true;

  constructor(
    private router: Router,
    private authService: AuthorizationService) {

      this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          console.log(`Navigation Start to "${event.url}"`)
        }

        if (event instanceof NavigationCancel) {
          console.log(`The Guard interrupted the transition to "${event.url}"`)
        }

        if (event instanceof NavigationEnd) {
          console.log(`Navigation End to "${event.url}"`)
        }
      })
    }

  ngOnInit(): void {
  }

  onRegistrationUser(Form: FormGroup){
    this.parentFormGroup.addControl('user', Form)
  }

  submit(): void{
    this.parentFormGroup.markAllAsTouched();

    if (this.parentFormGroup.status == 'VALID') {

      let user: IAuthUser = {
        username: this.parentFormGroup.value.user?.['username'],
        pass: this.parentFormGroup.value.user?.['passFormGroup'].pass
      }

      this.authService.createNewUser(user)
        .pipe(takeWhile(() => this.componentActive))
        .subscribe(data => {
          alert(`${data}`)
          this.router.navigate(['/login']);
        })


    }
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

}
