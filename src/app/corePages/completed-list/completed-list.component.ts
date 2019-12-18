import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/commonService';
import { filter } from 'rxjs/operators';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html',
  styleUrls: ['./completed-list.component.scss']
})
export class CompletedListComponent implements OnInit {
  orderData: Object[];
  updatedOrderedData: any = [];
  constructor(private _commonService_: CommonService) { }

  dishName = ['Vegetarian Lasagne', 'Cheese Rolls', 'Pina Colada Pork Ribs', 'Veg Panner Wrap', 'Chicken Nugget']

  ngOnInit() {
    this.getKitchenCompletedData();
  }

  generatePDF() {
    html2canvas(document.getElementById('contentToConvert')).then((canvas) => {
      let doc = new jsPDF("l", "mm", "a4");
      let img = canvas.toDataURL("image/png");
      doc.addImage(img, 'JPEG', 10, 10);
      doc.save('orderDetails.pdf');
    });
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
      this.calcCreatedTillnow();
    })
  }

  calcCreatedTillnow() {
    this.dishName.forEach(name => {
      let temp = {};
      let isItemAvialable = false;
      let calctotalNum = 0
      let predicted = 0;
      this.orderData.forEach(item => {
        if (item['product_name'] === name) {
          calctotalNum = calctotalNum + parseInt(item['created_till_now'], 10);
          isItemAvialable = true;
          if (predicted < item['predicted'])
            predicted = item['predicted']
        }

      })
      if (isItemAvialable) {
        temp = {
          created_till_now: calctotalNum,
          product_name: name,
          status: "Y",
          predicted
        }
        this.updatedOrderedData.push(temp)
      }
    })
  }

}
