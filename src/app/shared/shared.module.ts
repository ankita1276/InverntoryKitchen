import { NgModule } from "@angular/core";

import { BrowserModule } from '@angular/platform-browser';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import {  RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    SidenavComponent,
  ],
  providers: [],
})

export class SharedModule {}
