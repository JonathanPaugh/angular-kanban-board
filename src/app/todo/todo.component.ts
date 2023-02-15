import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input()
  todo: Todo={
    text: ""
  }

  @Output()
  onClickNext: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onClickPrevious: EventEmitter<string> = new EventEmitter<string>();
}

export interface Todo {
  text: string
}
