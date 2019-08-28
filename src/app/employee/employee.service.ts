import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs'
import { Employee } from './employee'

@Injectable()
export class EmployeeService {
  constructor(public http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('/api')
  }
  addEmployee(employee: any): Observable<Object> {
    return this.http.post('/api/add', employee)
  }

} 