import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  
  { path: "", pathMatch: "full", redirectTo: "sign-up" }, 
  { path: 'sign-up', component: SignupComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
