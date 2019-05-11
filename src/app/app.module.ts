import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product/product-form.component';
import { ProductFilterComponent } from './product/product-filter.component';
import { ProductItemComponent } from './product/product-item.component';

import { ParentComponent } from './interact/parent.component';
import { ChildComponent } from './interact/child.component';
import { CounterComponent } from './counter/counter.component';
import { CounterChildComponent } from './counter/counter-child.component';

import { counterReducer, productReducer, formAddProductReducer, filterReducer } from './ngrxstore/reducers';
import { StoreModule } from '@ngrx/store';

import { ProductsComponent } from './products/products.component';
import { ProductsFormComponent } from './products/products-form.component';
import { ProductsFilterComponent } from './products/products-filter.component';
import { ProductsItemComponent } from './products/products-item.component';

import { RequestApiComponent } from './request-api/request-api.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    MyFormComponent,
    ProductComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductItemComponent,
    ParentComponent,
    ChildComponent,
    CounterComponent,
    CounterChildComponent,
    ProductsComponent,
    ProductsFormComponent,
    ProductsFilterComponent,
    ProductsItemComponent,
    RequestApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      counter: counterReducer,
      products: productReducer,
      toogleForm: formAddProductReducer,
      filterMode: filterReducer
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
