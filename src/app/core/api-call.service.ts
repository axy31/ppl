import { Injectable } from '@angular/core';
import { Observable, of, throwError, Subject } from 'rxjs';
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
import { registerationObject } from '../objects/registerationObject';
import { isLoggedIn } from '../routing/isLoggedIn';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = 'http://ec2-52-66-210-236.ap-south-1.compute.amazonaws.com/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  isAdmin: Boolean = false;
  isLoggedIn: Boolean = false;
  team: string = "IPL";
  navbar: string = "navbar-IPL";
  constructor(private http: HttpClient) {
  }

  public checkIfAdmin() {
    if (localStorage.getItem("UserName") === null) {
      this.isAdmin = false;
      this.isLoggedIn = false;
      this.team = "IPL";
      this.navbar = "navbar-IPL";
    }
    else {
      this.team = localStorage.getItem('Team');
      this.navbar = "navbar-" + localStorage.getItem('Team');
      this.isLoggedIn = true;
    }
    this.isAdmin = (localStorage.getItem('Access') === 'Admin');
  }



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
        catchError(this.handleError('userRankDetails', []))
      );
  }

  getMatchDetails(): Observable<MatchDetailsObject[]> {
    return this.http.get<MatchDetailsObject[]>(apiUrl + 'matchDetails')
      .pipe(
        catchError(this.handleError('matchDetails', []))
      );
  }


  getScoreRange(): Observable<scoreRangeObject[]> {
    return this.http.get<scoreRangeObject[]>(apiUrl + 'scoreRange')
      .pipe(
        catchError(this.handleError('scoreRange', []))
      );
  }

  getWicketRange(): Observable<wicketRangeObject[]> {
    return this.http.get<wicketRangeObject[]>(apiUrl + 'wicketRange')
      .pipe(
        catchError(this.handleError('wicketRange', []))
      );
  }

  getBoundaryRange(): Observable<boundaryRangeObject[]> {
    return this.http.get<boundaryRangeObject[]>(apiUrl + 'boundaryRange')
      .pipe(
        catchError(this.handleError('boundaryRange', []))
      );
  }

  getPlayersInTeam(object: playerListObject): Observable<any[]> {
    return this.http.post<any[]>(apiUrl + 'getPlayersInTeam', object, httpOptions)
      .pipe(
        catchError(this.handleError('getPlayersInTeam', []))
      );
  }

  doLogin(object: loginObject): Observable<any[]> {
    return this.http.post<any[]>(apiUrl + 'login', object, httpOptions)
      .pipe(
        catchError(this.handleError('login', []))
      );
  }

  getTeams(): Observable<teamObject[]> {
    return this.http.get<teamObject[]>(apiUrl + 'teams')
      .pipe(
        catchError(this.handleError('teams', []))
      );
  }

  getProfileDetails(): Observable<any[]> {
    var object = {}
    object['UserName'] = localStorage.getItem("UserName");
    return this.http.post<any[]>(apiUrl + 'getProfileDetails', object, httpOptions)
      .pipe(
        catchError(this.handleError('getProfileDetails', []))
      );
  }

  openReprediction(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl + 'openReprediction')
      .pipe(
        catchError(this.handleError('openReprediction', []))
      );
  }

  getPlayerList(): Observable<playerListObject[]> {
    return this.http.get<playerListObject[]>(apiUrl + 'teamPlayerList')
      .pipe(
        catchError(this.handleError('teamPlayerList', []))
      );
  }

  doRegister(object: registerationObject): Observable<registerationObject[]> {
    return this.http.post<registerationObject[]>(apiUrl + 'signUp', object, httpOptions)
      .pipe(
        catchError(this.handleError('signUp', []))
      );
  }

  doProfileUpdate(object: any): Observable<any[]> {
    object['UserName'] = localStorage.getItem("UserName");
    return this.http.post<any[]>(apiUrl + 'doProfileUpdate', object, httpOptions)
      .pipe(
        catchError(this.handleError('doProfileUpdate', []))
      );
  }

  getPreviousPrediction(): Observable<any[]> {
    var object = {}
    object['UserName'] = localStorage.getItem("UserName");
    return this.http.post<any[]>(apiUrl + 'GetpreviousPrediction', object, httpOptions)
      .pipe(
        catchError(this.handleError('GetpreviousPrediction', []))
      );
  }

  GetMatchHistory(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl + 'GetMatchHistory')
      .pipe(
        catchError(this.handleError('GetMatchHistory', []))
      );
  }
  getPredictionArchive(object): Observable<any[]> {
    return this.http.post<any[]>(apiUrl + 'GetpredictionHistory', object, httpOptions)
      .pipe(
        catchError(this.handleError('GetpredictionHistory', []))
      );
  }

  postPredictions(object): Observable<any[]> {
    object['UserName'] = localStorage.getItem("UserName");
    return this.http.post<any[]>(apiUrl + 'makePrediction', object, httpOptions)
      .pipe(
        catchError(this.handleError('makePrediction', []))
      );
  }
}
