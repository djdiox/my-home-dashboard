import { TodosService, Todo } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  public todosList: Observable<Todo[]>;
  public currentSort = [
    'todos',
    'tasks',
    'work-times',
    'top-tracks',
    'top-offers'
  ]
  constructor(private todosService: TodosService) { }

  ngOnInit() {

    this.todosList = this.todosService
      .todos;

    this.todosService
      .fetchTodos();
  }

}
