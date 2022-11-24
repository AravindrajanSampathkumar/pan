import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: any;
  currentPage: any = '';
  registerSubmitted = false;

  constructor(
    private router: Router, public authService: AuthService, private route: ActivatedRoute
  ) {
    this.currentPage = this.route.snapshot.paramMap.get('page')
  }

  public ngOnInit(): void {
    this.registerForm = new FormGroup({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      aadhar: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.min(1000000000), Validators.pattern(("[6-9]\\d{9}"))]),
      email: new FormControl('', [Validators.required, Validators.pattern(("[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*"))]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),// (control) => this.passwordMatchValidator(control, 'confirmPassword')
      gender: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
    });
    this.authService.userIsLoggedIn.next(true);
  }

  register() {
    if (this.registerForm.controls['confirmPassword'].value != this.registerForm.controls['password'].value) {
      this.registerForm.controls['confirmPassword'].setErrors({ 'mismatch': true });
    } else {
      this.registerForm.controls['confirmPassword'].setErrors(null)
    }
    this.registerSubmitted = true;
    console.log('loginForm===============', this.registerForm.value);
    console.log('registered')
  }

  navigateBack() {
    if (this.currentPage == 'DashboardPage') {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/']);
    }
  }
  public ngOnDestroy(): void {
    this.authService.userIsLoggedIn.next(false);
  }

}