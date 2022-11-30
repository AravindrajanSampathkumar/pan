import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  timer: any
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.userIsLoggedIn.next(true);
    this.authService.countDownValue.subscribe((val) => {
      console.log('val========', val)
      this.timer = val;
    })
  }

  navigateBack() {
    this.router.navigate(['/']);
  }

  navigateRegisterPage() {
    // this.router.navigate(['/register', { page: 'DashboardPage' }]);
    this.router.navigate(['/dashboard/newUser']);

  }
  ngOnDestroy(): void {
    this.authService.userIsLoggedIn.next(false);
  }

}
