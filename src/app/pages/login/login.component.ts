import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { EmployeeService } from '../authenticated/employee.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,ToastModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',

})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword=false  
  constructor(private fb: FormBuilder,private rouetr:Router,
    private loginService:LoginService,
    private messageService:MessageService,
    private employeeService:EmployeeService
  ){
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]]
    });
  }
  

 
  show() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Wrong Credentials' });
}
  onLogin(){
    console.log(this.loginForm);
    
   if(this.loginForm.valid){
    
    let isUserLogin=this.isUserValid(this.loginForm.value.username!,this.loginForm.value.password!)
       
    if(isUserLogin){
          localStorage.setItem('role','Admin');      
          this.rouetr.navigate(['/employee/list']);
      
        }
        else{
          this.show();
        }
   }
   else{
    this.loginForm.markAllAsTouched();
   }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  get userNameControl() {
    return this.loginForm.controls['username'];
  }

  get passwordControl() {
    return this.loginForm.controls['password'];
  }
isUserValid(username:string,password:string){
  console.log(username,password);
  return username === 'touchworld' && password === 'touchworldTech';

}
}
