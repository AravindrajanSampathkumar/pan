import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit, OnDestroy {
  createNewUserForm: any;
  registerSubmitted = false;
  constructor(public authService: AuthService,private router: Router) { }

  ngOnInit() {
    this.createNewUserForm = new FormGroup({
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
    if (this.createNewUserForm.controls['confirmPassword'].value != this.createNewUserForm.controls['password'].value) {
      this.createNewUserForm.controls['confirmPassword'].setErrors({ 'mismatch': true });
    } else {
      this.createNewUserForm.controls['confirmPassword'].setErrors(null)
    }
    this.registerSubmitted = true;
    console.log('loginForm===============', this.createNewUserForm.value);
    console.log('registered')
  }
  navigateBack(){
    this.router.navigate(['/dashboard']);
  }
  ngOnDestroy(): void {
    this.authService.userIsLoggedIn.next(false);
  }

}
