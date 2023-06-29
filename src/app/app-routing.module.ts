import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewerComponent } from './viewer/viewer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"viewer",component:ViewerComponent},
  {path:"home",component:HomeComponent},
  {path:"**",redirectTo:"/viewer",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
