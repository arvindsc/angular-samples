import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from './employee.component';

@Component({
  selector: 'app-employee-table',
  template: `<h1>{{heading}}</h1>
  <table>
  <tr>
    <td> Name</td>
    <td>Email</td>
  </tr>
  <tr *ngFor="let employee of employees">
    <td>{{employee.name}}</td>
    <td>{{employee.email}}</td>
    <td><button (click)="selectEmployee(employee)">Select</button></td>
  </tr>
</table>
  `
})
export class EmployeeTableComponent extends EmployeeComponent   {
  constructor() {
    super();
  }
}
