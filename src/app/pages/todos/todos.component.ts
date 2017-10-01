import { Observable } from 'rxjs/Observable';
import { TodosService, Todo } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos:Todo[];
  
  public currentTodo = <Todo>{name:''};

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosService
    .todos
    .subscribe((todos) => {
      this.todos = todos;
    });
    this.todosService
    .fetchTodos();
  }

  saveTodo(name:string){
    this.todosService
    .saveTodo(<Todo>{name})
    .subscribe(() => {
      console.log('updated');
    });
  }
}
