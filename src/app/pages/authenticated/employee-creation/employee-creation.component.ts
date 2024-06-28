import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-creation',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './employee-creation.component.html',
  styleUrl: './employee-creation.component.scss',

})
export class EmployeeCreationComponent {

  public ids: string[] = [];
  employeeCreateForm!:FormGroup;
  regexForEmail = '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}';
  constructor(
    private fb:FormBuilder,
    private employeeService:EmployeeService,
    private messageService:MessageService,
    private route:Router
  ){
    this.employeeCreateForm = this.fb.group({
      id:[this.generate(),[Validators.required]],
      EMAIL: ['', [Validators.required, Validators.email, Validators.pattern(this.regexForEmail)]],
      EMPLOYEE_NAME:['',[Validators.required]],
      CONTACT_NO:['',[Validators.required,Validators.minLength(10)]],
      ADDRESS:['',Validators.required]
    });
  }

  get emailControl(){
    return this.employeeCreateForm.controls['EMAIL']
  }
  get nameControl(){
    return this.employeeCreateForm.controls['EMPLOYEE_NAME']
  }
  get contactControl(){
    return this.employeeCreateForm.controls['CONTACT_NO']
  }
  get addressControl(){
    return this.employeeCreateForm.controls['ADDRESS']
  }

  generate(): string {
    let isUnique = false;
    let tempId = '';
  
    while (!isUnique) {
      tempId = this.generator();
      if (!this.idExists(tempId)) {
        isUnique = true;
        this.ids.push(tempId);
      }
    }
  
    return tempId;
  }
  
   remove(id: string): void {
    const index = this.ids.indexOf(id);
    this.ids.splice(index, 1);
  }
  
   generator(): string {
    const isString = `${this.S4()}${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}${this.S4()}${this.S4()}`;
  
    return isString;
  }
  
   idExists(id: string): boolean {
    return this.ids.includes(id);
  }
  
   S4(): string {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  createEmployee(){
    console.log(this.employeeCreateForm);
    if(this.employeeCreateForm.valid){
      console.log(this.employeeCreateForm.value);
      
        this.employeeService.appendTask(this.employeeCreateForm.value);
        this.showSuccess('User Created Successfully');
        this.route.navigate(['/employee/list'])

    }
    else{
      this.employeeCreateForm.markAllAsTouched()
    }
  }
   
  showError(message:string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
}
showSuccess(message:string) {
  this.messageService.add({ severity: 'success', summary: 'success', detail: message});
}
}
