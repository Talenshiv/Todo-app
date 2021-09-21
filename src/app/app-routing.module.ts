import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoComponent} from "./todo/todo.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full'},
  {
    path: 'todo',
    component: TodoComponent,
    children: [
      { path: ':id', component: EditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
