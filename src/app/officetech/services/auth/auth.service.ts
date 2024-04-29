import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = ""
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  signIn(email: string, password: string) {
    const users = this.http.get<any>(`${this.baseUrl}/users`);
    users.subscribe(
      (data) => {
        data.forEach((user: any) => {
          if (user.email === email && user.password === password) {
            console.log("User found")
            return user;
          }
        })
      },
      (error) => {
        console.error(error)
      }
    )
    return null;
  }
}
