import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductNewComponent } from './components/product-new/product-new.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/about/signup/signup.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { homeReducer } from './ngrx-state/reducers/home.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductNewComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
    ProductCardComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

    StoreModule.forRoot({home: homeReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
