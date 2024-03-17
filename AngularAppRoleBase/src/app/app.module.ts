import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardnavbarComponent } from './core/components/dashboardnavbar/dashboardnavbar/dashboardnavbar.component';
import { CreateuserComponent } from './features/auth/createuser/createuser/createuser.component';
import { LoginComponent } from './features/auth/login/login/login.component';
import { CreateCategoryComponent } from './features/category/create-category/create-category/create-category.component';
import { CategoryListComponent } from './features/category/category-list/category-list/category-list.component';
import { CreateProductComponent } from './features/product/create-product/create-product/create-product.component';
import { ProductListComponent } from './features/product/product-list/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    DashboardnavbarComponent,
    CreateuserComponent,
    LoginComponent,
    CreateCategoryComponent,
    CategoryListComponent,
    CreateProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
