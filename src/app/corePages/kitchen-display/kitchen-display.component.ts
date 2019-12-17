import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/commonService';
import { element } from 'protractor';

@Component({
  selector: 'app-kitchen-display',
  templateUrl: './kitchen-display.component.html',
  styleUrls: ['./kitchen-display.component.scss']
})
export class KitchenDisplayComponent implements OnInit {

  orderData : any

  constructor(private _commonService_ : CommonService) { }

  ngOnInit() {
    console.log("called");
    
    this._commonService_.getService().subscribe((res)=>{
      let array = [];
      Object.keys(res).forEach(element => {array.push(res[element])})
       console.log(array) 
       this.orderData =array;
      console.log(this.orderData,"res");
    })
  }

}
