import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { homeObject } from '../objects/homeObject';
import { MatchDetailsObject } from '../objects/MatchDetailsObject';
import { scoreRangeObject } from '../objects/scoreRangeObject';
import { wicketRangeObject } from '../objects/wicketRangeObject';
import { boundaryRangeObject } from '../objects/boundaryRangeObject';
import { teamObject } from '../objects/teamObject';
import { loginObject } from '../objects/LoginObject';
import { playerListObject } from '../objects/playerListObject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = 'http://ec2-52-66-210-236.ap-south-1.compute.amazonaws.com/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);
      return of(result as T);
    };
  }

  getuserRankDetails(): Observable<homeObject[]> {
    return this.http.get<homeObject[]>(apiUrl + 'userRankDetails')
      .pipe(
        tap(rankDetails => console.log('fetched userRankDetails')),
        catchError(this.handleError('userRankDetails', []))
      );
  }

  getMatchDetails(): Observable<MatchDetailsObject[]> {
    return this.http.get<MatchDetailsObject[]>(apiUrl + 'matchDetails')
      .pipe(
        tap(rankDetails => console.log('fetched matchDetails')),
        catchError(this.handleError('matchDetails', []))
      );
  }


  getScoreRange(): Observable<scoreRangeObject[]> {
    return this.http.get<scoreRangeObject[]>(apiUrl + 'scoreRange')
      .pipe(
        tap(rankDetails => console.log('fetched scoreRange')),
        catchError(this.handleError('scoreRange', []))
      );
  }

  getWicketRange(): Observable<wicketRangeObject[]> {
    return this.http.get<wicketRangeObject[]>(apiUrl + 'wicketRange')
      .pipe(
        tap(rankDetails => console.log('fetched wicketRange')),
        catchError(this.handleError('wicketRange', []))
      );
  }

  getBoundaryRange(): Observable<boundaryRangeObject[]> {
    return this.http.get<boundaryRangeObject[]>(apiUrl + 'boundaryRange')
      .pipe(
        tap(rankDetails => console.log('fetched boundaryRange')),
        catchError(this.handleError('boundaryRange', []))
      );
  }

  getPlayersInTeam(object: playerListObject): Observable<any[]> {
    console.log(object);
    return this.http.post<any[]>(apiUrl + 'getPlayersInTeam', object, httpOptions)
      .pipe(
        tap(rankDetails => console.log('fetched getPlayersInTeam')),
        catchError(this.handleError('getPlayersInTeam', []))
      );
  }

  doLogin(object: loginObject): Observable<any[]> {
    return this.http.post<any[]>(apiUrl + 'login', object, httpOptions)
      .pipe(
        tap(rankDetails => console.log('login')),
        catchError(this.handleError('login', []))
      );
  }

  getTeams(): Observable<teamObject[]> {
    return this.http.get<teamObject[]>(apiUrl + 'teams')
      .pipe(
        tap(rankDetails => console.log('fetched teams')),
        catchError(this.handleError('teams', []))
      );
  }

  getPlayerList(): Observable<playerListObject[]> {
    return this.http.get<playerListObject[]>(apiUrl + 'teamPlayerList')
      .pipe(
        tap(rankDetails => console.log('fetched teamPlayerList')),
        catchError(this.handleError('teamPlayerList', []))
      );
  }

}
