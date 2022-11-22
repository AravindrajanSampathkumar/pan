import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userIsLoggedIn = new BehaviorSubject(false);

constructor() { }

}
