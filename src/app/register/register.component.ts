import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: any;
  currentPage: any = '';
  status: string | undefined;
  registration: any = false;

  constructor(
    private router: Router, public authService: AuthService, private route: ActivatedRoute
  ) {
   // this.currentPage = this.route.snapshot.paramMap.get('page')
  }

  public ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.authService.userIsLoggedIn.next(true);
  }

  register() {
    console.log('loginForm===============', this.registerForm.value);
    console.log('registered')
  }

  navigateBack() {
      this.router.navigate(['/']);
  }
  public ngOnDestroy(): void {
    this.authService.userIsLoggedIn.next(false);
  }

}