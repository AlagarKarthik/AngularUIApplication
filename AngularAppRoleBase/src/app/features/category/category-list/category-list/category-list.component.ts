import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { GetCategoriesRequest } from '../../model/get-category-request.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories? : GetCategoriesRequest[];
  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories()
    .subscribe({
      next: (response)=>{
        this.categories = response;
      }
    });
  }
}
