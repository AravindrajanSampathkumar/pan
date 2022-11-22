import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(public authService: AuthService,private router: Router) { }

  ngOnInit(): void {    
    this.authService.userIsLoggedIn.next(true);
  }

  navigateBack(){
    this.router.navigate(['/login']);
  }

   ngOnDestroy(): void {
    this.authService.userIsLoggedIn.next(false);
  }

}
