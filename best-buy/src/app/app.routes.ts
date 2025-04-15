import { Routes } from '@angular/router';

import { CLHomeComponent } from './components/home/home.component';
import { CLAllProductsComponent } from './components/all-products/all-products.component';
import { CLCategoryComponent } from './components/category/category.component';

export const routes: Routes = [
  { path: '', component: CLHomeComponent },
  { path: 'all-products', component: CLAllProductsComponent },
  { path: 'category/:name', component: CLCategoryComponent }
];
