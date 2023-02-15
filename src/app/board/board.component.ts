import { Component } from '@angular/core';
import { Stage } from "../stage/stage.component";
import { Todo } from "../todo/todo.component";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  stages: Stage[]=[
    {
      name: "To Do",
      color: "warning"
    },
    {
      name: "In Progress",
      color: "danger"
    },
    {
      name: "Complete",
      color: "success"
    },
  ]

  todos: Todo[][]=[
    [
      {
        text: "Research options for project implementation"
      },
      {
        text: "Sign the NDA contract"
      },
    ],
    [
      {
        text: "Write post to social media platforms"
      },
    ],
    [
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
  ]
}
