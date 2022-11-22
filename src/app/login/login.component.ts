import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginValid = true;
  public username = '';
  public password = '';
  loginForm: any

  constructor(private router: Router, public authService: AuthService) { }

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    });
    this.authService.userIsLoggedIn.next(true);
  }
  //this.formRef.addValidation('ipSubnetGroup1',['ipAddress'], [Validators.required, CustomValidators.pattern(IP_SMTP, this.translationService.l10nStrings.get(L10N_VARIABLES.VALIDIP_ADDRESS))]);
  public ngOnDestroy(): void {
    this.authService.userIsLoggedIn.next(false);
  }

  onSubmit(): void {
    console.log('loginForm===============', this.loginForm.value);
    this.router.navigate(['/dashboard']);
  }
}