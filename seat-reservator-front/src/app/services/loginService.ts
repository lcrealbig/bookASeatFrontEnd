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

    constructor(private http: HttpClient){}
    urlStatus: string = environment.employeeService + 'serviceStatus';
    url: string = environment.employeeService + `verifyLogin`;

   postUser(employee: Employee) {
    return this.http
      .post(this.url, employee).subscribe((res)=>{

        console.log(res);
        
      });
  }
  checkStatus(){
    return this.http.get(this.urlStatus).subscribe;
 }

}