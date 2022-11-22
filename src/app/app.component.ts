import { Component, OnDestroy, OnInit } from '@angular/core';
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
  constructor(public router: Router, public authService: AuthService) {

  }

  ngOnInit() {
    this.authService.userIsLoggedIn.subscribe((val:any)=>{
      this.userIsLoggedIn = val;      
    console.log('userIsLoggedIn==========',this.userIsLoggedIn)
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
