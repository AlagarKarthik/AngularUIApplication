import { Injectable } from '@angular/core';
import { LoginRequest } from '../model/login-request.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponse } from '../model/login-response.model';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "https://localhost:7256/api/CreateUser/login/"
  $user = new BehaviorSubject<User | undefined>(undefined);
  constructor(private http: HttpClient, private cookieservice : CookieService) { }

  login(request: LoginRequest): Observable<LoginResponse>
  {
    return this.http.post<LoginResponse>('https://localhost:7256/api/Authentication/login',{
      email:request.email,
      password:request.password,
    });
  }

  setUser(user: User):void
  {this.$user.next(user);
    localStorage.setItem('user-email', user.email);
    localStorage.setItem('user-roles', user.roles.join(','));
  }


  user(): Observable<User | undefined>{
    return this.$user.asObservable();
  }

  getUser(): User | undefined{
    const email = localStorage.getItem('user-email');
    const roles = localStorage.getItem('user-roles');

    if(email && roles){
      const user: User ={
        email: email,
        roles:roles?.split(',')
      };
      return user;
    }
    return undefined;
  }

//  signUp(userObj:any){
//   return this.http.post<any>(`${this.baseUrl}CreateUser`,userObj)
//  }

//  login(userObj:any){
//   return this.http.post<any>(`${this.baseUrl} login`,userObj)
//  }
  

  logout(): void{
    localStorage.clear();
    this.cookieservice.delete('Authorization', '/')
    this.$user.next(undefined);
  }
}
