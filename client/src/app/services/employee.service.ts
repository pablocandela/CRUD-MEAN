import { Employee } from 'src/app/models/Employee';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private URL_API = 'http://localhost:4000/api/employees';
  private http: HttpClient;
  public employees: Employee[];
  public selectedEmployee: Employee = {
    name: '',
    office: 0,
    position: '',
    salary: 0
  };
    
  constructor(http: HttpClient) {
    this.http = http;
  }

  getEmployees(){
    return this.http.get<Employee[]>(this.URL_API);
  }

  createEmployee(employee: Employee){
    return this.http.post(this.URL_API,employee);
  }

  deleteEmployee(id: String){
    return this.http.delete(this.URL_API + "/" + id);
  }

  editEmployee(employee: Employee, id: String){
    return this.http.put(this.URL_API+ "/" + id,employee);
  }
}
