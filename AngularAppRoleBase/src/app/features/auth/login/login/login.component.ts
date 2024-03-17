import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../../model/login-request.model';
import { AuthService } from '../../services/auth.service';
import {CookieService}  from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginRequest;  

  constructor(private authService: AuthService, private cookieService: CookieService,
    private router : Router, private toastService: NgToastService) {
    this.model = {
      email:'',
      password:'',
    };
   }

  ngOnInit(): void {
    
  }

  onFormSubmit(): void
  {
    this.authService.login(this.model)
    .subscribe({
      
      next:(response) =>
      {
        this.toastService.success({detail:"Success Message", summary:"Login successfully",duration:5000 })
        this.cookieService.set('Authorization', 'Bearer ${response.token}',
          undefined, '/', undefined, true, 'Strict');
          
          this.authService.setUser({
            
            email:response.email,
            roles:response.roles
          });
        
        this.router.navigateByUrl('/')
      } 

    })
  
  }

}
