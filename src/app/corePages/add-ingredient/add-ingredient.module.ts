import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddIngredientComponent } from './add-ingredient.component';
import { AddIngredientRoutingModule } from './add-ingredient.routing.module';




@NgModule({
  declarations: [
    AddIngredientComponent
  ],
  imports: [
    CommonModule,
    AddIngredientRoutingModule
  ]
})
export class AddIngredientModule { }
