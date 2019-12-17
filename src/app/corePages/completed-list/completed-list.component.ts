import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/commonService';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html',
  styleUrls: ['./completed-list.component.scss']
})
export class CompletedListComponent implements OnInit {
  orderData: Object[];
  constructor(private _commonService_: CommonService) { }


  ngOnInit() {
    this.getKitchenCompletedData();
  }
  getKitchenCompletedData() {
    this._commonService_.getItem().subscribe((res) => {
      let array = [];
      Object.keys(res).forEach(element => { array.push(res[element]) })
      this.orderData = array.filter((item) => {
        if (item.status === 'Y') {
          return item;
        }
      })
    })
  }
}
