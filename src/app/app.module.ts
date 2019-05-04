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

import { counterReducer } from './ngrxstore/reducers';
import { StoreModule } from '@ngrx/store';

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
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ counter: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
