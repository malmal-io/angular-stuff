import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {

  @Input()
  text: string;

  @Output()
  coolEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
