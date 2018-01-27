import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from './../task.model';
import { TasksService } from 'app/tasks/tasks.service';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html'
})
export class TaskListComponent {

    get tasks(): Task[] { return this.tasksService.tasks; }

    constructor(private router: Router, private tasksService: TasksService) {}

    add() {
        this.router.navigate(['tasks/add']);
    }

    delete(event: Event, task: Task) {
        this.tasksService.delete(task);
    }
}
