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

  async signIn(email: string, password: string) {
    try {
      return this.http.get<any>(`${this.baseUrl}/auth/login?email=${email}&password=${password}`);
    } catch (error) {
      console.log('Error to sign in', error);
      return null;
    }
  }

  async signUp(firstName: string, lastName: string, email: string, password: string, role: string) {
    try {
      return this.http.post<any>(`${this.baseUrl}/auth/register`, {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password,
        "role": role
      })
    }catch(e) {
      console.log('Error to sign up', e);
      return null;
    }
  }

  getUsers() {
    return this.http.get<any>(`${this.baseUrl}/api/v1/users`)
  }

  createUser(user: any) {
    return this.http.post<any>(`${this.baseUrl}/api/v1/users`, user)
  }
}
