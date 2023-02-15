import {Component, Input} from '@angular/core';

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
}

export interface Stage {
  name: string,
  color: string,
}
