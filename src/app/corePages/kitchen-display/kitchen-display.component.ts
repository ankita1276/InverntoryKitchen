import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/commonService';

@Component({
  selector: 'app-kitchen-display',
  templateUrl: './kitchen-display.component.html',
  styleUrls: ['./kitchen-display.component.scss']
})
export class KitchenDisplayComponent implements OnInit {

  orderData: any = '';
  filteredData: any = '';
  obj = Object.keys;

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

  updateItem(updatedItem) {
    this._commonService_.addItem(updatedItem).subscribe((res) => {
      console.log('Updated Successfully');
    });
  }

  setStatusDone(selectedIndex) {
    this.orderData[selectedIndex].status = 'Y';
    // tslint:disable-next-line: max-line-length
    this.orderData[selectedIndex].created_till_now = this.orderData[selectedIndex].created_till_now + this.orderData[selectedIndex].quantity;
    this.orderData[selectedIndex].quantity = 0;
    this._commonService_.deleteItem(selectedIndex).subscribe((res) => {
      this.updateItem(this.orderData[selectedIndex]);
      this.getKitchenListData();
    });

  }
}
