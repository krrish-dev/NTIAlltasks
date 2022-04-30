import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './compenents/parent/parent.component';
import { AboutComponent } from './pages/about/about.component';
import { ArticleComponent } from './pages/article/article.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { FeaturesComponent } from './pages/features/features.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { SingleproductComponent } from './pages/singleproduct/singleproduct.component';

const routes: Routes = [
  {path :'home', component:HomeComponent},
  {path :'', redirectTo:"home", pathMatch:"full"},
  {path :'about', component:AboutComponent},
  {path :'contact', component:ContactComponent},
  {path :'features', component:FeaturesComponent},
  {path :'articls', component:ArticleComponent},
 // {path :'products', component :ProductsComponent},
  //{path :'products/:id', component :SingleproductComponent},
  {path:"products", children:[
  {path:"",component:ProductsComponent},
  {path:":id", component:SingleproductComponent},
  {path:"singlepost",component:SingleproductComponent},
  ]},
  {path :'gallery', component :GalleryComponent},
  {path :'parent', component :ParentComponent},
  {path :"**", component : ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
