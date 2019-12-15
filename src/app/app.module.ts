import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AddIngredientComponent } from './corePages/add-ingredient/add-ingredient.component';
import { KitchenDisplayComponent } from './corePages/kitchen-display/kitchen-display.component';
import { CompletedListComponent } from './corePages/completed-list/completed-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddIngredientComponent,
    KitchenDisplayComponent,
    CompletedListComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
