import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {UserEntity} from "../../models/user-entity";
import {environment} from "../../../../environments/environment";
import {tap} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = ""
  constructor(private http: HttpClient) {
    this.baseUrl=environment.baseUrl;
  }
  getUserData() {
    return this.http.get<UserEntity[]>(`${this.baseUrl}/users `).pipe(
      tap(data => console.log('Datos del usuario recibidos:', data)));
  }

  getUserDataByIdServices(id: number) {
    return this.http.get<UserEntity>(`${this.baseUrl}/services/user/${id}`).pipe(
      tap(data => console.log('Datos del usuario recibidos:', data)));
  }

  getUserById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/auth/${id}`).pipe(
      tap(data => console.log('Datos del usuario recibidos:', data)));
  }

  editUserById(id: number, user: any) {
    return this.http.put<any>(`${this.baseUrl}/profiles/${id}`, user);
  }

  getSkillsByUserId(userId: number) {
    return this.http.get<any>(`${this.baseUrl}/auth/skills/${userId}`);
  }

  saveSkillByUserId(skill: any) {
    return this.http.post<any>(`${this.baseUrl}/auth/skills`, skill);
  }
}
