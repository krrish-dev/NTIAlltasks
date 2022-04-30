import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './compenents/test/test.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeaturesComponent } from './pages/features/features.component';
import { Home2Component } from './pages/home2/home2.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProductsComponent } from './pages/products/products.component';
import { SingleproductComponent } from './pages/singleproduct/singleproduct.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ArticleComponent } from './pages/article/article.component';
import { SingleArticleComponent } from './pages/single-article/single-article.component';
 
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CardComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FeaturesComponent,
    Home2Component,
    ErrorComponent,
    ProductsComponent,
    SingleproductComponent,
    GalleryComponent,
    ArticleComponent,
    SingleArticleComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
