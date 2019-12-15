import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitchenDisplayComponent } from './corePages/kitchen-display/kitchen-display.component';
import { AddIngredientComponent } from './corePages/add-ingredient/add-ingredient.component';
import { CompletedListComponent } from './corePages/completed-list/completed-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: "/KitchenDisplay",
    pathMatch: 'full'
  },
  {path:'KitchenDisplay', component: KitchenDisplayComponent},
  {path:'addItems', component: AddIngredientComponent},
  {path:'successOrders', component: CompletedListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
