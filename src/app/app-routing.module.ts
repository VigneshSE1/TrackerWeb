import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LayoutComponent } from './layout/layout.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  {
    path: 'create-user',
    component: CreateUserComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'create-product',
    component: CreateProductComponent
  },
  {
    path: 'edit-product',
    component: EditProductComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
