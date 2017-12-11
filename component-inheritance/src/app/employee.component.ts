import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEmployee } from './employee';

@Component({
  selector: 'app-employee',
  template: `<h1></h1>`
})
export class EmployeeComponent implements OnInit {
  @Input() employees: Array<IEmployee>;
  @Output() select: EventEmitter<IEmployee> = new EventEmitter();

  heading = 'Employee';
  constructor() {}

  ngOnInit() {}
  selectEmployee(employee: IEmployee) {
    this.select.emit(employee);
  }
}
