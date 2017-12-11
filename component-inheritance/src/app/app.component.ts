import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  employees: Array<IEmployee>;
  displayTable= false;
  selectedEmployee: IEmployee;

  constructor(private _employeeService: EmployeeService) {}
  ngOnInit() {
    this._employeeService
      .getEmployee()
      .subscribe(emoloyees => (this.employees = emoloyees));
  }
  selectEmployee(employee: IEmployee) {
    this.selectedEmployee = employee;
  }
}
