import { Component, OnInit } from "@angular/core";
import { UserPostService } from "../userpost.service";
import { Users,Posts } from "../userpost";

@Component({
  selector: "app-profile-display",
  templateUrl: "./profile-display.component.html",
  styleUrls: ["./profile-display.component.css"]
})
export class ProfileDisplayComponent implements OnInit {

  posts: Posts[];

  getPosts() : void {
    this.userpostService.getPosts().subscribe(t => (this.posts = t));

  }

  deletePost(PostId: number) : void {
    this.userpostService.deletePost(PostId).subscribe(t=> this.getPosts());
  }

  users: Users[];

  getUsers() {
    this.userpostService.getUsers().subscribe(users => (this.users = users));
  }

 
  constructor(private userpostService: UserPostService) {}

  ngOnInit() {

    this.getPosts();
    this.getUsers();
  
   
  }
}
