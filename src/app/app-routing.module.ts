import { HomeComponent } from './Component/home/home.component';

import { CartComponent } from './Component/cart/cart.component';
import { FoodComponent } from './Component/food/food.component';
import { LoginComponent } from './Component/login/login.component';
import { LayoutComponent } from './Component/layout/layout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', component: LayoutComponent, children: [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component:HomeComponent},
    {path:'breakfast', component:FoodComponent},
    {path:'login',component:LoginComponent},
    {path:'food',component:FoodComponent},
    {path:'cart',component:CartComponent},
    



    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
