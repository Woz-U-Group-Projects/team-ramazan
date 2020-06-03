import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { User } from "./models/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  // Java Spring Boot uses port 8080
  //apiUrl: string = "http://localhost:8080/tasks";

  // C# dotnetcore uses port 5000
  //apiUrl: string = "http://localhost:5000/api/tasks";

  // Express will use port 3000
  apiUrl: string = "http://localhost:3000/users/";
  

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);

  }
  loginUser(user): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
