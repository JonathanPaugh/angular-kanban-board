import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  stages: Array<string>=[
    "To Do",
    "In Progress",
    "Complete"
  ]
}
