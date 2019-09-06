import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id : 1,
    name : 'Mark',
    gender : 'Male',
    contactPreference : 'Email',
    email : 'mark@gmail.com',
    dateOfBirth : new Date ('10/25/1988'),
    department : 'IT',
    isActive : true,
    photoPath : 'assets/images/1.jpg'
    },
    {
      id : 2,
    name : 'Mary',
    gender : 'Female',
    contactPreference : 'Phone',
    phoneNumber : 1234567890,
    // email : 'mary@gmail.com',
    dateOfBirth : new Date ('11/20/1978'),
    department : 'HR',
    isActive : true,
    photoPath : 'assets/images/1.jpg'
    },
    {
      id : 3,
    name : 'John',
    gender : 'Male',
    contactPreference : 'Phone',
    phoneNumber : 9876543210,
    // email : 'john@gmail.com',
    dateOfBirth : new Date ('03/25/1971'),
    department : 'IT',
    isActive : false,
    photoPath : 'assets/images/1.jpg'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
