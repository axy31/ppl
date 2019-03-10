import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { homeObject } from '../objects/homeObject';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://ec2-52-66-210-236.ap-south-1.compute.amazonaws.com/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {  
      // TODO: send the error to remote logging infrastructure
      console.error(error);         
      return of(result as T);
    };
  }

  getuserRankDetails (): Observable<homeObject[]> {
    return this.http.get<homeObject[]>(apiUrl + 'userRankDetails')
      .pipe(
        tap(rankDetails => console.log('fetched userRankDetails')),
        catchError(this.handleError('userRankDetails', []))
      );
  }
  

}
