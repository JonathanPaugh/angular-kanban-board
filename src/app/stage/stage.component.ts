import {Component, EventEmitter, Input, Output} from '@angular/core';
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

  @Output()
  onClickNext: EventEmitter<EventClick> = new EventEmitter<EventClick>();

  @Output()
  onClickPrevious: EventEmitter<EventClick> = new EventEmitter<EventClick>();

  handleClickNext(e: string, todoIndex: number) {
    this.onClickNext.emit({
      index: todoIndex,
      text: e,
    })
  }

  handleClickPrevious(e: string, todoIndex: number) {
    this.onClickPrevious.emit({
      index: todoIndex,
      text: e,
    })
  }
}

export interface Stage {
  name: string,
  color: string,
}

export interface EventClick {
  index: number,
  text: string,
}


