import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';


const routes: Routes = [

  {path: "", redirectTo:"profile", pathMatch: "full"},
  {path: "Profile", component: ProfileDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
