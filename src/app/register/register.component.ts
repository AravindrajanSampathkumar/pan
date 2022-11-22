import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  constructor(
    private _router: Router, public authService: AuthService
  ) {
  }

  public ngOnInit(): void {
    this.authService.userIsLoggedIn.next(true);
  }

  register(){
    console.log('registered')
  }

  public ngOnDestroy(): void {
    this.authService.userIsLoggedIn.next(false);
  }

}