import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list/category-list.component';
import { CreateCategoryComponent } from './features/category/create-category/create-category/create-category.component';
import { LoginComponent } from './features/auth/login/login/login.component';
import { CreateuserComponent } from './features/auth/createuser/createuser/createuser.component';
import { CreateProductComponent } from './features/product/create-product/create-product/create-product.component';
import { ProductListComponent } from './features/product/product-list/product-list/product-list.component';


const routes: Routes = [
  {
    path: 'admin/categories',
    component : CategoryListComponent
  },
  {
    path: 'admin/categories/create',
    component : CreateCategoryComponent
  },
  
  {
    path:'admin/products',
    component:ProductListComponent
  },
  {
    path: 'admin/products/create',
    component : CreateProductComponent
  },
  
  {
    path:'login',
    component:LoginComponent
  },
  
  {
    path:'createuser',
    component:CreateuserComponent
  }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
