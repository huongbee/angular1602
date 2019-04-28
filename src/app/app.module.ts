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

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    MyFormComponent,
    ProductComponent,
    ProductFormComponent,
    ProductFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
