import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge'
import {Subject} from 'rxjs/Subject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  click$= new Subject();
  clock;

  constructor(){
    this.clock= Observable.merge(
      this.click$,
      Observable.interval(5000))
      .map(()=>new Date());
  }
}
