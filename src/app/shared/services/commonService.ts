import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  endpoint = 'https://inventroysystem.firebaseio.com';
  countrySpecific = '';



  constructor(private http: HttpClient) { }

  getItem() {
    return this.http.get(`${this.endpoint}/orders.json`);
  }
  addItem(data) {
    console.log(data);
    return this.http.post(`${this.endpoint}/orders.json`,data);
  }
  deleteItem(key){
    return this.http.delete(`${this.endpoint}/orders/${key}.json`);
  }
  updateItem(key,data){
    return this.http.put(`${this.endpoint}/orders/${key}.json`,data);
  }

}
