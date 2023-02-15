import { Component, Input } from '@angular/core';
import { Todo } from "../todo/todo.component";

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent {
  @Input()
  stage: Stage = {
    name: "",
    color: "light"
  }

  @Input()
  todos: Todo[] = []
}

export interface Stage {
  name: string,
  color: string,
}
