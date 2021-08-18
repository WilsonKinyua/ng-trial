import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  todos: Todo[] = [
    new Todo(1, 'wash utensils', 'after am done with washing the utensils'),
    new Todo(2, 'wash shoes', 'after am done with washing the shoes'),
    new Todo(3, 'wash car', 'after am done with washing the car'),
    new Todo(4, 'wash the house', 'after am done with washing the house'),
  ];

  isTodoCompleted(isComplete, index){
    if (isComplete) {
      this.todos.splice(index,1);
    }
  }

  viewTodoListDetails(i) {
    this.todos[i].showTodoDescription = !this.todos[i].showTodoDescription;
  }

}
