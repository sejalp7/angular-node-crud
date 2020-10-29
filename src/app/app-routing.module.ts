import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from 'src/components/add-item/add-item.component';
import { ListItemComponent } from 'src/components/list-item/list-item.component';


const routes: Routes = [
  { path: 'add-item', component: AddItemComponent },
  { path: 'list-item', component: ListItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
