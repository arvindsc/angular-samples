import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from './employee.component';

@Component({
  selector: 'app-employee-list',
  template: `
  <h1>{{heading}}</h1>
  <ul>
    <li *ngFor="let employee of employees">
    {{employee.name}}  <br>
    {{employee.email}} <br>
    <button (click)="selectEmployee(employee)">Select</button>
    </li>
  </ul>
  `
})
export class EmployeeListComponent extends EmployeeComponent {
  constructor() {
    super();
   }
}
