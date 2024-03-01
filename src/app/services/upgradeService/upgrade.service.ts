import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api = 'http://localhost:8080/api/v1';
const momo = 'http://localhost:8080/api/momo';
@Injectable({
  providedIn: 'root'
})
export class UpgradeService {

  constructor(private http: HttpClient) { }

  VNPay(price: any, id: any) {
    const formData = new FormData();
    formData.append('price', price);
    formData.append('id', id);
    
    const headers = new HttpHeaders();

    return this.http.post(`${api}/pay`, formData, { headers, responseType: 'text' })
  }
  MoMo(amount: any) {
    const headers = new HttpHeaders();
  
    return this.http.post(`${momo}/create-order?amount=${amount}`, { headers, responseType: 'text' })
  }
}
