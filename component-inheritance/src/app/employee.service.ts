import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {
  endpoint = 'https://jsonplaceholder.typicode.com/users';
  constructor(private _http: HttpClient) { }

  getEmployee(): Observable<Array<IEmployee>> {
    return this._http.get<Array<IEmployee>>(this.endpoint);
  }
}
