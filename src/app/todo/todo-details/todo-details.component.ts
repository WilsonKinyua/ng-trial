import { Todo } from './../../todo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent implements OnInit {
  @Input() todo: Todo;
  @Output() isTodoCompleted = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  removeTodo(remove: boolean) {
    this.isTodoCompleted.emit(remove);
  }
}
