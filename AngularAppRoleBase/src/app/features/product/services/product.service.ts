import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateProductRequest } from '../model/create-product-request.model';
import { Observable } from 'rxjs';
import { GetProductRequest } from '../model/get-product-request.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  createProduct(model: CreateProductRequest): Observable<void> {
    return this.http.post<void>('https://localhost:7256/api/Product',model)
  }

  getAllProducts():Observable<GetProductRequest[]>{
    return this.http.get<GetProductRequest[]>('https://localhost:7256/api/Product');
  }
}
