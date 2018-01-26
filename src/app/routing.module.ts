import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from 'app/tasks/task-list/task-list.component';
import { HomeComponent } from 'app/home/home.component';

@NgModule({
  exports: [
    RouterModule
  ],
})
export class RoutingModule { }

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TaskListComponent }
];
