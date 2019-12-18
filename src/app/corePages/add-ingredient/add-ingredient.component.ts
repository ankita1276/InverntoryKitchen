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
  dishName = ['Vegetarian Lasagne', 'Cheese Rolls', 'Pina Colada Pork Ribs', 'Veg Panner Wrap', 'Chicken Nugget']
  orderData
  constructor(private _commonService_: CommonService) { }

  ngOnInit() {
  }

  itemChange(itemname) {
    console.log(itemname,"called");
    this._commonService_.getItem().subscribe((res) => {
      let array = [];
      Object.keys(res).forEach(element => { array.push(res[element])});
      this.orderData = array;
    });
    if(this.orderData){
      this.orderData.filter((item)=>{
        if(item.product_name === itemname){
          return item;
        }
        this.orderData = item;
        console.log(this.orderData,"filter");
        
      })
    }
  
    // this._countryList_.getCountryDetails(countrycode).subscribe((res) => {
    //   this.selectedCountry = res;
    //   this._countryList_.setSpecificCountryDetails(this.selectedCountry);
    // });
  }

  onSubmit() {
    this._commonService_.addItem(this.addIngredient).subscribe((res) => {
      console.log(res);
    });
    console.log(this.addIngredient, 'FORM');
  }


}
