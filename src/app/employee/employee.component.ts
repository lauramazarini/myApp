import { Component, OnInit } from '@angular/core'
import { Employee } from './employee'
import { EmployeeService } from './employee.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  providers: [EmployeeService]
})

export class EmployeeComponent implements OnInit {
  newEmployee = {};
  employees: Employee[]
  title = [{ 'firstName': 'Silvia', 'lastName': 'Murgoci', 'salary': 50000 }, { 'firstName': 'Laura', 'lastName': 'Murgoci', 'salary': 80000 }]


  constructor(public employeeService: EmployeeService) { }


  ngOnInit() {
    this.getEmployeees()
    console.log('lalala', this.employees)
  }

  addEmployee(): void {
    this.employeeService.addEmployee(this.newEmployee).subscribe(x =>{console.log('test')});
    this.getEmployeees();
  }

  getEmployeees(): void {
    this.employeeService.getEmployees().subscribe(x =>{console.log(this.employees = x)});
  }
}