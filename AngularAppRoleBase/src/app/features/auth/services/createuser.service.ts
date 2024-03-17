import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateUserRequest } from '../model/createuser-request.model';

@Injectable({
  providedIn: 'root'
})
export class CreateuserService {

  constructor(private http: HttpClient) { }

  createUser(model: CreateUserRequest): Observable<void> {
    return this.http.post<void>('https://localhost:7256/api/CreateUser',model)
  }
}
