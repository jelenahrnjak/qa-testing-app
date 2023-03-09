import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { RegisteredUserComponent } from './registered-user/registered-user.component';
const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'registered-user', component: RegisteredUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
