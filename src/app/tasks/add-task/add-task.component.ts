import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Task } from 'app/tasks/task.model';
import { TasksService } from 'app/tasks/tasks.service';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html'
})
export class AddTaskComponent implements OnInit {

    model: Task = new Task();

    constructor(private router: Router, private tasksService: TasksService) {}

    ngOnInit() {}

    onSubmit() {
        this.tasksService.add(this.model);
        this._navigateList();
    }

    onCancel(ev: Event) {
        ev.preventDefault();
        console.log('cancel');
        this._navigateList();
    }


    private _navigateList() {
        this.router.navigate(['tasks']);
    }
}
