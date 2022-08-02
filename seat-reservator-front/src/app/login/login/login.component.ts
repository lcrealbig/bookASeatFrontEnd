import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { LoginService } from 'src/app/services/loginService';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employee: Employee = new Employee();


  constructor(private loginService: LoginService) { }
  login: string ='';
  password: string ='';
  ngOnInit(): void {
  }
  
  onSubmit(){
  this.employee.employeeLogin = this.login;
  this.employee.employeePassword = this.password;  
  return this.loginService.postUser(this.employee);

  }
}
