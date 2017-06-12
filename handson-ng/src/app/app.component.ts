import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('signal', [
      state('void', style({
        'transform': 'translateY(-100%)'
      })),
      state('go', style({
        'background-color': 'green'
      })),
      state('stop', style({
        'background-color': 'red'
      })),
      transition('void <=> *', animate(5000, keyframes([
        style({ 'transform': 'scale(0)' }),
        style({ 'transform': 'scale(.9)' }),
        style({ 'transform': 'scale(.1)' }),
        style({ 'transform': 'scale(.9)' }),
        style({ 'transform': 'scale(.5)' }),
        style({ 'transform': 'scale(1)' }),
      ]))),
      transition('go <=> stop', animate(500))]
    )]
})
export class AppComponent {
  signal = 'stop';
  isHear = false;
  constructor() {
  }
  onGoClick() {
    this.signal = "go"
  }
  onStopClick() {
    this.signal = "stop"
  }
  onToggleClick() {
    this.isHear = !this.isHear;
  }
}
