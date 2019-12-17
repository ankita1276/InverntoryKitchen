import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenDisplayRoutingModule } from './kitchen-display.routing.module';
import { KitchenDisplayComponent } from './kitchen-display.component';



@NgModule({
  declarations: [
    KitchenDisplayComponent
  ],
  imports: [
    CommonModule,
    KitchenDisplayRoutingModule
  ]
})
export class KitchenDisplayModule { }
