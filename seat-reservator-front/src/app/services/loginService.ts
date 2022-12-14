import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.local'
import { Employee } from '../models/employee';


@Injectable({
    providedIn: 'root',
  })
export class LoginService{
    logged: Employee = new Employee();
    constructor(private http: HttpClient, private router: Router){}
    urlStatus: string = environment.employeeService + 'serviceStatus';
    url: string = environment.employeeService + `verifyLogin`;

   postUser(employee: Employee) {
    return this.http
      .post(this.url, employee).subscribe((res)=>{

        console.log(res);
        this.logged = res;
        this.router.navigate(['/home']);
        
      });
  }
  checkStatus(){
    return this.http.get(this.urlStatus).subscribe;
 }

}