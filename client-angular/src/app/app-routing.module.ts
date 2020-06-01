import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  {path: "", redirectTo:"profile", pathMatch: "full"},
  {path: "Profile", component: ProfileDisplayComponent},
  {path: "Login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
