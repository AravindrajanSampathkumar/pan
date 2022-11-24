import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './service/auth.service';

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
  loginsubmitted = false;
  constructor(public router: Router, public authService: AuthService, public cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.authService.userIsLoggedIn.subscribe((val: any) => {
      this.userIsLoggedIn = val;
      console.log('userIsLoggedIn==========', this.userIsLoggedIn)
    });
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6),
        Validators.maxLength(40)]),
    });
  }
  
  ngAfterViewChecked() {
    this.cd.detectChanges();
  }

  onSubmit(): void {
    this.loginsubmitted = true;
    console.log('loginForm===============', this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
    }else{
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
