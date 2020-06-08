import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { from } from 'rxjs';







const routes: Routes = [
  {path: "", redirectTo:"", pathMatch: "full"},
  {path: "profile", component: ProfileDisplayComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "post", component: PostAddComponent},
  {path: "post/edit/:id" , component:PostEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
