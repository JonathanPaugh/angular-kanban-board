import { Component } from '@angular/core';
import { Stage } from "../stage/stage.component";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  stages: Array<Stage>=[
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
}
