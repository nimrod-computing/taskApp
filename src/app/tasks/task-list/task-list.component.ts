import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get tasks() {
    return [
      { title: 'Task 1', description: 'This is task 1'},
      { title: 'Task 2', description: 'This is task 2'}
    ]
  }

}
