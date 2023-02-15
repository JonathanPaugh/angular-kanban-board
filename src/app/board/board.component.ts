import { Component } from '@angular/core';
import { EventClick, Stage } from "../stage/stage.component";
import { Todo } from "../todo/todo.component";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  stages: StageInput[]=[
    {
      stage: {
        name: "To Do",
        color: "warning"
      },
      todos: [
        {
          text: "Research options for project implementation"
        },
        {
          text: "Sign the NDA contract"
        },
      ]
    },
    {
      stage: {
        name: "In Progress",
        color: "danger"
      },
      todos: [
        {
          text: "Write post to social media platforms"
        },
      ]
    },
    {
      stage: {
        name: "Complete",
        color: "success"
      },
      todos: [
        {
          text: "Participate in scrum meeting"
        },
        {
          text: "Review open pull requests"
        },
        {
          text: "Make morning coffee"
        },
      ]
    },
  ]

  handleClickNext(e: EventClick, stageIndex: number) {
    console.log(e.index);
    console.log(e.text);

    let stages = structuredClone(this.stages);
    let [ todo ] = stages[stageIndex].todos.splice(e.index, 1);
    stages[stageIndex + 1].todos.push(todo);
    this.stages = stages;
  }

  handleClickPrevious(e: EventClick, stageIndex: number) {
    console.log(e.index);
    console.log(e.text);

    let stages = structuredClone(this.stages);
    let [ todo ] = stages[stageIndex].todos.splice(e.index, 1);
    stages[stageIndex - 1].todos.push(todo);
    this.stages = stages;
  }
}

interface StageInput {
  stage: Stage,
  todos: Todo[],
}
