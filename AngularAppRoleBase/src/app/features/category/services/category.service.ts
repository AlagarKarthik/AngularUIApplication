import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreateCategoryRequest } from '../model/create-category-request.model';
import { GetCategoriesRequest } from '../model/get-category-request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  createCategory(model: CreateCategoryRequest): Observable<void> {
    return this.http.post<void>('https://localhost:7256/api/Category',model)
  }

  getAllCategories():Observable<GetCategoriesRequest[]>{
    return this.http.get<GetCategoriesRequest[]>('https://localhost:7256/api/Category');
  }
}
