import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Users } from "./userpost";
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
  

  constructor(private http: HttpClient) {}

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
