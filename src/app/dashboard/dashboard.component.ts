import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {    
    this.authService.userIsLoggedIn.next(true);
  }


   ngOnDestroy(): void {
    this.authService.userIsLoggedIn.next(false);
  }

}
