import { Routes } from '@angular/router';

import { AddTaskComponent } from 'app/tasks/add-task/add-task.component';
import { TaskListComponent } from 'app/tasks/task-list/task-list.component';
import { HomeComponent } from 'app/home/home.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tasks', component: TaskListComponent },
    { path: 'tasks/add', component: AddTaskComponent }
];
