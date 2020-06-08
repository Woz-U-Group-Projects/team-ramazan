import { Component, OnInit } from '@angular/core';
import { UserPostService } from "../userpost.service";
import { Posts, Users } from "../userpost";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  editPost : Posts = new Posts();

  savePost(){
    this.userpostService
    .editPost(this.editPost)
    .subscribe(t=>this.router.navigate(["profile"]));
  }



  constructor(private userpostService: UserPostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {


    this.route.params.subscribe(param => {
      this.userpostService
      .getPost(+param["PostId"])
      .subscribe(t=>(this.editPost = t));
    });
  }

}
