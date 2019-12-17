import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/commonService';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  // countryNames: any;
  // selectedCountry : Object;
  constructor() {
  }

  ngOnInit() {
    // this.getCountryList();
  }

  // getCountryList() {
  //   this._countryList_.getService().subscribe((res) => {
  //     console.log(res);
  //     this.countryNames = res;
  //   });
  // }

  // countryChange(countrycode) {
  //   this._countryList_.getCountryDetails(countrycode).subscribe((res) => {
  //     this.selectedCountry = res;
  //     console.log( this.selectedCountry);
  //   });

  // }

}
