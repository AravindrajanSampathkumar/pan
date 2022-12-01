import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";

export class User {
  constructor(public status: string) {}
}

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  userIsLoggedIn = new BehaviorSubject(false);
  invalidLogin: boolean | undefined;
  error: any;
  constructor(private httpClient: HttpClient) {}
  authenticate(username: string, password: string) {
    return true;
    
    
    // this.httpClient
    //   .post<any>("http://13.232.219.106:80/api/auth/signin", { "username":username, "password":password })
    //   .pipe(
    //     map(userData => {
    //       sessionStorage.setItem("username", username);
    //       let tokenStr = "Bearer " + userData.token;
    //       sessionStorage.setItem("token", tokenStr);
    //       sessionStorage.setItem("id", userData.id);
    //       return userData;
    //     })
    //   );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
  }
}