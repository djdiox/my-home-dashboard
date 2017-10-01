import { Observable } from 'rxjs/Observable';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import { Headers, Http, Response } from '@angular/http';
export interface Todo {
  name: string;

}
@Injectable()
export class TodosService {
  private _todosUrl = `${environment.baseUrl}/todos`
  private _todos: Subject<Todo[]>;
  constructor(private http: Http) {
    this._todos = new Subject<Todo[]>();
  }

  public get todos() {
    return this._todos.asObservable();
  }

  public fetchTodos() {
    return this.http
      .get(this._todosUrl)
      .do((response) => {
        const todos = response.json();
        this._todos.next(todos);
      })
      .catch((err) => {
        return [];
      })
      .subscribe();
  }

  public saveTodo(todo:Todo) {
    return this.http
    .post(this._todosUrl, todo)
    .do((response: Response) => {
      const newTask = response.json();
      this._todos.next(newTask);
    });
  }
}
