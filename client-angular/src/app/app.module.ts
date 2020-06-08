import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileDisplayComponent } from "./profile-display/profile-display.component";
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, ProfileDisplayComponent, NavComponent, LoginComponent, SignupComponent, PostAddComponent, PostEditComponent, HomeComponent, ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
