import { Component, OnInit } from '@angular/core';
import { CreateCategoryRequest } from '../../model/create-category-request.model';
import { CategoryService } from '../../services/category.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  model: CreateCategoryRequest;
  constructor(private categoryService: CategoryService, private toastService: NgToastService) {
    this.model = {
      categoryname:'',
      categorydescription:''
    }
   }

  ngOnInit(): void {
  }

  onFormSubmit()
  {
    this.categoryService.createCategory(this.model)
    .subscribe({
      next : (response) =>{
        this.toastService.success({detail:"Success Message", summary:"Category Saved Successfully",duration:5000 })
        console.log('Succeed')
      },
     
    })
  }
}
