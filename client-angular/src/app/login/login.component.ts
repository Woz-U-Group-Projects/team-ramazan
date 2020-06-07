import { Component, OnInit } from '@angular/core';
import { UserPostService } from '../userpost.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;
  pass;

  constructor(private userpostService: UserPostService) { }
  
  login(data) {
    this.loginUser({
      username: this.user,
      password: this.pass

    })
    console.log(this.user)
    console.log(this.pass)
  }

  loginUser(users) {
    this.userpostService.loginUser(users)
  }



  ngOnInit() {

  }

}
