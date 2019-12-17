import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/commonService';

@Component({
  selector: 'app-kitchen-display',
  templateUrl: './kitchen-display.component.html',
  styleUrls: ['./kitchen-display.component.scss']
})
export class KitchenDisplayComponent implements OnInit {

  orderData: Object[];

  constructor(private _commonService_: CommonService) { }

  ngOnInit() {
    this.getKitchenListData();
  }

  getKitchenListData() {
    this._commonService_.getItem().subscribe((res) => {
      let array = [];
      Object.keys(res).forEach(element => { array.push(res[element])});
      console.log(array);
      this.orderData = array;
      console.log(this.orderData, 'res');
    });
  }

  setStatusDone(selectedIndex){
    console.log(selectedIndex,"DOnestatuscalled");
  }
}
