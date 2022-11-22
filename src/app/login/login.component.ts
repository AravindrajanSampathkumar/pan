import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginValid = true;
  public username = '';
  public password = '';


  constructor(
    private router: Router,public authService: AuthService
  ) {
  }

  public ngOnInit(): void {    
    this.authService.userIsLoggedIn.next(true);
  }

  public ngOnDestroy(): void {
    this.authService.userIsLoggedIn.next(false);
  }

  public login(): void {
   this.router.navigate(['/dashboard']);
  }
}