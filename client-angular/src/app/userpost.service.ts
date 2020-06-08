import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Users, Posts } from "./userpost";
import { Observable , of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserPostService {
  // Java Spring Boot uses port 8080
  //apiUrl: string = "http://localhost:8080/tasks";

  // C# dotnetcore uses port 5000
  //apiUrl: string = "http://localhost:5000/api/tasks";

  // Express will use port 3000
  apiUrl: string = "http://localhost:3000/users/login";
  url: string = "http://localhost:3000/posts";
  

  constructor(private http: HttpClient) {}

 
//............................POST......................................................


  getPosts (): Observable<Posts[]>{
    return this.http.get<Posts[]>(this.url);
  }

  getPost(PostId: number) : Observable<Posts> {
    return this.http.get<Posts>(this.url + "/" + PostId );
  }

  addPost(post : Posts) : Observable<Posts> {
    return this.http.post<Posts>(this.url,post);
  }

  deletePost(PostId:number) : Observable<Posts>{
    return this.http.delete<Posts>(this.url + "/" + PostId );
  }

  editPost(post : Posts) : Observable<Posts>{
    return this.http.put<Posts>(this.url + '/' +post.PostId,post);
  }

//................................USERS-----LOGIN---------SIGNUP........................................................


  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);

  }

  loginUser(user): Observable<Users> {
    
    return this.http.post<Users>(this.apiUrl, user)
    .pipe(
      // Log the result or error
        //data => this.log(filename, data),
        
        //console.log()
       // error => this.logError(filename, error)
      
    );
  }
}
