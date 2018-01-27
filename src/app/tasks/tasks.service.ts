import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';

import { Task } from 'app/tasks/task.model';

@Injectable()
export class TasksService {
    private Url = 'https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks';

    private _memoryTasks: Task[] = [];

    private _tasks: Task[] = [];
    public get tasks(): Task[] {
        let tasks = [ ...this._tasks, ...this._memoryTasks ];
        console.log(tasks);
        return tasks;
    }

    constructor(private http: HttpClient)     {
        this.getAll()
            .subscribe(
                tasks => { this._tasks = tasks; },
                err => { console.log(err); }
            );
    }

    getAll(): Observable<Task[]> {
        return this.getRecords$()
            .pluck<any, any[]>('documents')
            .map(documents => {
                let tasks = documents.map(doc => {
                    let task = new Task();
                    task.id = doc.name;
                    task.description = doc.fields.description.stringValue;
                    task.title = doc.fields.description.stringValue;
                    return task;
                });
                return tasks;
            });
    }

    getRecords$(): Observable<Object> {
        let records = this.http.get(this.Url);
        console.log(records);
        return records;
    }

    add(task: Task): void {
        if (!task.id || task.id.trim() === '') {
            task.id = new Date().toString();
        }
        this._memoryTasks.push(task);
    }

    delete(task: Task): void {
        this._memoryTasks = this._memoryTasks.filter(t => t.id !== task.id);
        this._tasks = this._tasks.filter(t => t.id !== task.id);
    }
}
