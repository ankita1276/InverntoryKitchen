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
  constructor(private _commonService_: CommonService) { }

  dishName = ['Vegetarian Lasagne', 'Cheese Rolls', 'Pina Colada Pork Ribs', 'Veg Panner Wrap', 'Chicken Nugget']

  ngOnInit() {
    this.getKitchenCompletedData();
  }
  generatePDF() {
    html2canvas(document.getElementById('contentToConvert')).then((canvas) => {
      var doc = new jsPDF();
      doc.text(5, 10, ' 1');
      var img = canvas.toDataURL("image/png");
      doc.addImage(img, 'JPEG', 10, 10);
      doc.save('test.pdf');
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
    })
    // if(this.orderData)
    // {
   // this.calcCreatedTillNow();
    // }
  }

  calcCreatedTillNow() {
    console.log(this.orderData,"called");


    this.orderData.filter((data) => {
      console.log(data, "datamap");

      const loopDish = this.dishName.map((name) => name)
      console.log(loopDish, "loopDish");
      // if(data.product_name === loopDish ) {
      // return data;
      // }
    })


  }

}
