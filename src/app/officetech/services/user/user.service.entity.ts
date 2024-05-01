import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {UserEntity} from "../../models/user-entity";
import {environment} from "../../../../environments/environments";
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
}
