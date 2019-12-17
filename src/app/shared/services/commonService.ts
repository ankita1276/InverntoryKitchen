import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  endpoint = 'https://inventroysystem.firebaseio.com';
  countrySpecific = 'https://restcountries.eu/rest/v2/alpha';
  // data: Object;
  private countryDetails = new BehaviorSubject<any>("");


  constructor(private http: HttpClient) { }

  getService() {
    console.log("called  service");
    
    return this.http.get(`${this.endpoint}/orders.json`);
  }
  getCountryDetails(code) {
    return this.http.get(`${this.countrySpecific}/${code}`);
  }

  setSpecificCountryDetails(data: any) {
    this.countryDetails.next(data);
  }
  getSpecificCountryDetails() {
    return this.countryDetails.asObservable();
  }


  // selectedCountryDetails(data) {
  //  this.data = data;
  // }
  
}
