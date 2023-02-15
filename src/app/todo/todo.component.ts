import { Component, Input } from '@angular/core';

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
}

export interface Todo {
  text: string
}
