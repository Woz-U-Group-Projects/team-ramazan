import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../models/user";

@Component({
  selector: "app-profile-display",
  templateUrl: "./profile-display.component.html",
  styleUrls: ["./profile-display.component.css"]
})
export class ProfileDisplayComponent implements OnInit {
  constructor(private userService: UserService) {}

  users: User[];

  getUsers() {
    this.userService.getUsers().subscribe(users => (this.users = users));
  }


  ngOnInit() {
    this.getUsers();
  }
}
