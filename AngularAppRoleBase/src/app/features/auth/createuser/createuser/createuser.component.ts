import { Component, OnInit } from '@angular/core';
import { CreateUserRequest } from '../../model/createuser-request.model';
import { CreateuserService } from '../../services/createuser.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  model: CreateUserRequest;

  constructor(private createuserService: CreateuserService,private toastService: NgToastService) { 
    this.model = {
      username:'',
      password:'',
      role:'',
    };

  }

  ngOnInit(): void {
  }

  onFormSubmit(): void
  {
    this.createuserService.createUser(this.model)
    .subscribe({
      
      next : (response) =>{
        this.toastService.success({detail:"Success Message", summary:"User created successfully",duration:5000 })
        console.log('Succeed')
      },
     
    })
  }

}
