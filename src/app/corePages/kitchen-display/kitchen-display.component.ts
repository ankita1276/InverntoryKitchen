import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/commonService';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-kitchen-display',
  templateUrl: './kitchen-display.component.html',
  styleUrls: ['./kitchen-display.component.scss']
})
export class KitchenDisplayComponent implements OnInit {

  obj = Object.keys;
  orderData: Object;

  // tslint:disable-next-line: variable-name
  constructor(private _commonService_: CommonService) { }

  ngOnInit() {
    this.getKitchenListData();
  }

  getKitchenListData() {
    this._commonService_.getItem().subscribe((res) => {
      this.obj(res).forEach((key) => {
        if (res[key].status === 'Y') {
          delete res[key];
        }
      });
      this.orderData = res;
    });
  }

  setStatusDone(selectedIndex) {
    this.orderData[selectedIndex].status = 'Y';
    // tslint:disable-next-line: max-line-length
    this.orderData[selectedIndex].created_till_now = this.orderData[selectedIndex].created_till_now + this.orderData[selectedIndex].quantity;
    this._commonService_.updateItem(selectedIndex, this.orderData[selectedIndex]).subscribe((res) => {
      this.getKitchenListData();
    });

  }
}
