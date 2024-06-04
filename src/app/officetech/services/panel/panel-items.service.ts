import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PanelItemsService {
  baseUrl: string = ""
  data: any[] = []
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  getItems(type_user: string, id_user: number) {
    return this.http.get<any>(`${this.baseUrl}/services/${type_user}/active/${id_user}`)
  }

  getItemsCompleted(type_user: string, id_user: number) {
    return this.http.get<any>(`${this.baseUrl}/services/${type_user}/completed/${id_user}`)
  }

  editStatusService(id_service: number, status: string) {
    return this.http.put<any>(`${this.baseUrl}/services/change-status/${id_service}?status=${status}`, {})
  }
}
