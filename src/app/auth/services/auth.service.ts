import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private router: Router)
   { }


   login(data:any): Observable<any[]> {

    console.log('here checking data.....',data);
    
  
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http
      .post<any[]>(`${environment.apiUrl}/user/api/v1/userLogin`, data, httpOptions)
      .pipe(
        map((userData: any) => {
          if (userData.status) {
            localStorage.setItem('status', JSON.stringify(userData.status));

            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('userid', userData.userid);
            localStorage.setItem('username', userData.username);
            localStorage.setItem('rolename', userData.rolename);
            return userData;
          } else {
            return '';
          }
        })
      );
  }







}
