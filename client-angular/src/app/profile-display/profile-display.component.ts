import { Component, OnInit } from "@angular/core";
import { UserPostService } from "../userpost.service";
import { Users } from "../userpost";

@Component({
  selector: "app-profile-display",
  templateUrl: "./profile-display.component.html",
  styleUrls: ["./profile-display.component.css"]
})
export class ProfileDisplayComponent implements OnInit {

  
  constructor(private userpostService: UserPostService) {}

  users: Users[];

  getUsers() {
    this.userpostService.getUsers().subscribe(users => (this.users = users));
  }

 

  ngOnInit() {
   
  }
}
