import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletedListComponent } from './completed-list.component';


const routes: Routes = [
  {
    path: '',
    component: CompletedListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompletedListRoutingModule { }
