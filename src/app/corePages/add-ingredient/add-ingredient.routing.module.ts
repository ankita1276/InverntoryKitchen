import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddIngredientComponent } from './add-ingredient.component';


const routes: Routes = [
  {
    path: '',
    component: AddIngredientComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddIngredientRoutingModule { }
