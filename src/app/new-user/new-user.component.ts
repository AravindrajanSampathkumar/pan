import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit, OnDestroy {

  constructor(public authService: AuthService,private router: Router) { }

  ngOnInit() {
    this.authService.userIsLoggedIn.next(true);
  }
  navigateBack(){
    this.router.navigate(['/dashboard']);
  }
  ngOnDestroy(): void {
    this.authService.userIsLoggedIn.next(false);
  }

}
