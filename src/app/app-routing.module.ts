import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoriesComponent } from './components/stories/stories.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailComponent } from './components/stories/story/detail/detail.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'legends', component: StoriesComponent, 
    children: [
      {path:':id', component: DetailComponent}
  ]}
  ,
  {path:'cart', component: CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
