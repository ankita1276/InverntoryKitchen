import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitchenDisplayComponent } from './corePages/kitchen-display/kitchen-display.component';
import { AddIngredientComponent } from './corePages/add-ingredient/add-ingredient.component';
import { CompletedListComponent } from './corePages/completed-list/completed-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/kitchendisplay',
    pathMatch: 'full'
  },
  {
    path: 'kitchendisplay',
    loadChildren: () => import('./corePages/kitchen-display/kitchen-display.module').then(m => m.KitchenDisplayModule)
  },

  {
    path: 'additems',
    loadChildren: () => import('./corePages/add-ingredient/add-ingredient.module').then(m => m.AddIngredientModule)
  },

  {
    path: 'successorders',
    loadChildren: () => import('./corePages/completed-list/completed-list.module').then(m => m.CompletedListModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
