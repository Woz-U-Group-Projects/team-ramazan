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

@NgModule({
  declarations: [AppComponent, ProfileDisplayComponent, NavComponent, LoginComponent, SignupComponent, ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
