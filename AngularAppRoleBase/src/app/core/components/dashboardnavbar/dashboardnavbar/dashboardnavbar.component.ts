import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { User } from 'src/app/features/auth/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardnavbar',
  templateUrl: './dashboardnavbar.component.html',
  styleUrls: ['./dashboardnavbar.component.css']
})
export class DashboardnavbarComponent implements OnInit {

  user?: User

  constructor(private authservice : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.authservice.user()
    .subscribe({
      next: (response) =>{
        this.user = response;
      }
    })

    this.user = this.authservice.getUser();
    
  }

  onLogout(): void{
    this.authservice.logout();
    this.router.navigateByUrl('/');
  }

}
