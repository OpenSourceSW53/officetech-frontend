import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl: string = "";
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  async savePayment(payment: any) {
    try {
      return this.http.post<any>(`${this.baseUrl}/payment-details`, payment);
    }catch(e) {
      console.log('Error to save payment', e);
      return null;
    }
  }
}
