import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: "", component: SignUpComponent},
  {path: "main-page", component: MainPageComponent},
];

@NgModule({
  imports: 
  [ 
    RouterModule.forRoot(routes),
    FormsModule, 
    BrowserModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
