import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'pan';
  subscriptions = new Subscription();
  userIsLoggedIn = false;
  loginForm: any
  constructor(public router: Router, public authService: AuthService, public cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.authService.userIsLoggedIn.subscribe((val: any) => {
      this.userIsLoggedIn = val;
      console.log('userIsLoggedIn==========', this.userIsLoggedIn)
    });
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  //this.formRef.addValidation('ipSubnetGroup1',['ipAddress'], [Validators.required, CustomValidators.pattern(IP_SMTP, this.translationService.l10nStrings.get(L10N_VARIABLES.VALIDIP_ADDRESS))]);
  ngAfterViewChecked() {
    this.cd.detectChanges();
  }
  login() {
    this.router.navigate(['/login']);
  }

  onSubmit(): void {
    console.log('loginForm===============', this.loginForm.value);
    this.router.navigate(['/dashboard']);
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
