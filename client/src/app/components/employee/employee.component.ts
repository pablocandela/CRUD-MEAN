import { Employee } from 'src/app/models/Employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employeeService: EmployeeService;

  constructor(employeService: EmployeeService) {
    this.employeeService = employeService;
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      res => this.employeeService.employees = res,
      err => console.log(err)
    );
  }

  addEmployee(form: NgForm): void {
    let newEmployee: Employee = {
      name: form.value.name,
      office: form.value.office,
      position: form.value.position,
      salary: form.value.salary
    };
    if (!form.value._id) {
      this.employeeService.createEmployee(newEmployee).subscribe(
        (res) => {
          this.getEmployees();
          this.formReset(form);
        }
      );
    }else{
      this.employeeService.editEmployee(newEmployee,form.value._id).subscribe(
        (res) => {
          this.getEmployees();
          this.formReset(form);
        }
      );
    }
  }

  deleteEmployee(id: String): void {
    const conf = confirm("Esta seguro de querer eliminar al empleado");
    if (conf) this.employeeService.deleteEmployee(id).subscribe(
      (res) => {
        this.getEmployees();
      }
    );
  }

  formReset(form: NgForm): void {
    form.reset();
    form.value.name = "";
    form.value.position = "";
    form.value.office = 0;
    form.value.salary = 0;
  }

  editEmployee(employee: Employee): void {
    this.employeeService.selectedEmployee = employee;
  }

}
