import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskListComponent } from './task-list/task-list.component';
import { TasksService } from './tasks.service';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TaskListComponent,
    AddTaskComponent
  ],
  providers: [
    TasksService
  ]})
export class TasksModule { }
