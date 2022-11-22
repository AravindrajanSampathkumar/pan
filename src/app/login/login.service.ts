import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { of, Subject, Subscription} from 'rxjs';
import { catchError,switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnDestroy{
  public postDiscoveryRule$ = new Subject();
  private _postDiscoveryRule = new Subject();

public get postDiscoveryRuleResponse() {
  return this._postDiscoveryRule.asObservable();
}
  subscriptions = new Subscription();
  constructor(private http: HttpClient) { 
    this.subscriptions.add(
      this.postDiscoveryRule$
        .pipe(
          switchMap((data) => {
            return this.http
              .post<HttpResponse<any>>('thetsAPI', data, {
                observe: 'response',
              })
              .pipe(
                catchError((httpError: HttpErrorResponse) => {
                  this._postDiscoveryRule.next({
                    successStatus: false,
                    serverResponse: httpError.error,
                  });
                  return of();
                })
              );
          })
        )
        .subscribe((res:any) => {
          if (res.status === 200) {
            this._postDiscoveryRule.next({
              successStatus: true,
              serverResponse: res.body,
            });
          } else {
            this._postDiscoveryRule.next({
              successStatus: false,
              serverResponse: undefined,
            });
          }
        })
    );
  }
  
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

