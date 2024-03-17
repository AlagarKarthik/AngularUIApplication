import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetProductRequest } from '../../model/get-product-request.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product? : GetProductRequest[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe({
      next: (response) =>{
      this.product = response;
    }
    })
  }
}
