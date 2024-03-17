import { Component, OnInit } from '@angular/core';
import { CreateProductRequest } from '../../model/create-product-request.model';
import { ProductService } from '../../services/product.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  model: CreateProductRequest;
  constructor(private createProductService: ProductService, private toastService: NgToastService) { 
    this.model ={
      productname:'',
      productdescription:''
    }
  }

  ngOnInit(): void {
  }

  onFormSubmit(): void{

    this.createProductService.createProduct(this.model)
    .subscribe({
      next : (response) =>{
        this.toastService.success({detail:"Success Message", summary:"Product Saved Successfully",duration:5000 })
        console.log('Succeed')
      },
  })
}
}
