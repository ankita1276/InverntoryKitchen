import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/commonService';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent implements OnInit {

  addIngredient: any = {
    product_name: '',
    quantity: '',
    predicted: '',
    status: 'N',
    created_till_now: ''
  };
  addAlert: boolean = false;
  // Option List
  dishName = ['Vegetarian Lasagne', 'Cheese Rolls', 'Pina Colada Pork Ribs', 'Veg Panner Wrap', 'Chicken Nugget'];
  alertData: string;

  constructor(private _commonService_: CommonService) { }

  ngOnInit() {
  }


  onSubmit() {
    const sendata: any = this.addIngredient;
    if (sendata.product_name && sendata.quantity !== '') {
      this._commonService_.addItem(this.addIngredient).subscribe((res) => {
        this.alertData = 'Item Added Successfully'
        this.addAlert = true
      }, err => console.log('error', err.status));
    } else {
      this.alertData = 'Please select Quantity and Name'
      this.addAlert = true
    }
  }


}
