import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example-app';

  load = false;

  eventData;

  constructor() {}

  eventHandler = (data) => {
    console.log(this.eventData);
    this.eventData = data;
  }
}
