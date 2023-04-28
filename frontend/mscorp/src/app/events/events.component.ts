import { Component } from '@angular/core';
import { events } from '../events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events = [...events];
}
