import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'pan';
  showHomeScreen = true;
  subscriptions = new Subscription();
  constructor(public router: Router){

  }

  ngOnInit() {

  }
  login(){
    this.showHomeScreen = false;
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
