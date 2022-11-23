import { BehaviorSubject, Subject, Subscription, timer } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormatTimePipe } from './pipes/formatTime.pipe';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userIsLoggedIn = new BehaviorSubject(false);
countDown: Subscription;
counter = 900;
tick = 1000;
countDownValue = new Subject();

constructor(private timePipe:FormatTimePipe) { 
  this.countDown = timer(0, this.tick).subscribe(() => {// it should be inside the loggedin API success response
    --this.counter;
    if(this.counter != 0){
      this.countDownValue.next(timePipe.transform(this.counter))
    }else{
      // write code for logout
    }
  });
}

}
