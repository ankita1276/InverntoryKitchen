import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedListRoutingModule } from './completed-list.routing.module';
import { CompletedListComponent } from './completed-list.component';



@NgModule({
  declarations: [
    CompletedListComponent
  ],
  imports: [
    CommonModule,
    CompletedListRoutingModule
  ]
})
export class CompletedListModule { }
