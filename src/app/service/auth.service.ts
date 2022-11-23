import { BehaviorSubject, Subject, Subscription, timer } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormatTimePipe } from '../pipes/formatTime.pipe';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {
  userIsLoggedIn = new BehaviorSubject(false);
  countDown: Subscription;
  counter = 900;
  tick = 1000;
  countDownValue = new Subject();

  constructor(public timePipe: FormatTimePipe) {
    this.countDown = timer(0, this.tick).subscribe(() => {// it should be inside the loggedin API success response
      --this.counter;
      if (this.counter != 0) {
        this.countDownValue.next(timePipe.transform(this.counter))
      } else {
        // write code for logout
      }
    });
  }


  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token') ?? ''
        }
      })
    }
    return next.handle(req);
  }
  

}
