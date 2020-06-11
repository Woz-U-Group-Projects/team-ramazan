import { Component, OnInit } from '@angular/core';
import { UserPostService } from "../userpost.service";
import { Posts, Users } from "../userpost";
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {



  newPost: Posts = new Posts();

  addPost() {
    this.userpostService
    .addPost(this.newPost)
    .subscribe(t=>this.router.navigate(["profile"]));

  }

  constructor(private userpostService: UserPostService, private router : Router) { }

  ngOnInit() {
    this.addPost();
  
  }

}
