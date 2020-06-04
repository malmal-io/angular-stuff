import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'example-app';

  load = false;

  eventData;

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.load = true;
      this.cdr.markForCheck();
    }, 8000);
  }

  eventHandler = (data) => {
    this.eventData = data;
  }
}
