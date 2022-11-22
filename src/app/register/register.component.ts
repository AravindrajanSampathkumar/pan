import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm:any;
  constructor(
    private router: Router, public authService: AuthService
  ) {
  }

  public ngOnInit(): void {
    this.registerForm = new FormGroup({
      fname: new FormControl('',[Validators.required]),
      lname: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    });
    this.authService.userIsLoggedIn.next(true);
  }

  register(){
    console.log('loginForm===============', this.registerForm.value);
    console.log('registered')
  }

  navigateBack(){
    this.router.navigate(['/']);
  }
  public ngOnDestroy(): void {
    this.authService.userIsLoggedIn.next(false);
  }

}