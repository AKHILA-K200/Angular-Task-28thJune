import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { employeeManagement } from '../employee.type';
import { EmployeeService } from '../employee.service';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationComponent } from '../shared/confirmation/confirmation.component';
import { MessageService } from 'primeng/api';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [TableModule,CommonModule,ButtonModule,PaginatorModule,DialogModule,ConfirmationComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
employeeList!:employeeManagement.employeeList[];
pagedEmployeeList:employeeManagement.employeeList[] = [];

first: number = 0;
rows: number = 10;
totalElements=0;
isConfirmationVisible=false;
confirmationMessage='';
confirmationButton='';
CloseButton=''
value=''

searchControl: FormControl = new FormControl();
private destroy$ = new Subject<void>();
selectedEmployeeId=''
constructor(private employeeService:EmployeeService,private route:Router,private messageService:MessageService){

}
  ngOnInit() {
    this.employeeService.setEmployeeList();
    // this.searchControl.valueChanges
    //   .pipe(
    //     debounceTime(300),
    //     distinctUntilChanged(),
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe(keyword => this.searchKeyword(keyword));

    this.getEmployeeList();
  }
  getEmployeeList(){
    this.employeeList= JSON.parse(localStorage.getItem("employeeList")!) ;
    this.totalElements=this.employeeList.length;
    this.updatePagedEmployeeList();

   }
   updatePagedEmployeeList() {
    this.pagedEmployeeList = this.employeeList.slice(this.first, this.first + this.rows);
  }
   navigateToCreate() {
    this.route.navigate(['dashboard/employee/create']);
  }
 
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.updatePagedEmployeeList();
  }
  closeConfirmationPopUp(event:boolean){
   if(event){
    this.isConfirmationVisible=false
    this.employeeService.deletEmployee( this.selectedEmployeeId);
    this.getEmployeeList();
     this.showSuccess("Employee deleted success fully")
   }
   else{
    this.isConfirmationVisible=false

   }
  }
  deleteEmployee(employee:employeeManagement.employeeList){
    this.confirmationButton='Yes Delete';
    this.CloseButton='Cancel'
    this.confirmationMessage=`Are Your sure that you want to delete  ${employee.EMPLOYEE_NAME}`
    this.selectedEmployeeId=employee.ID;
    this.isConfirmationVisible=true

  }
  search(){
    // debounceTime(300,
    //   this.employeeList=  this.employeeService.searchKeyword('john');
    //   this.totalElements = this.employeeList.length;
    //   this.updatePagedEmployeeList();
    // )
    if(this.value !='')
      {
        this.first = 0;
        this.employeeList=  this.employeeService.searchKeyword('john');
      this.totalElements = this.employeeList.length;
      this.updatePagedEmployeeList();
      }
    else{
      this.getEmployeeList()
    }
   

  
  }
  showSuccess(message:string) {
    this.messageService.add({ severity: 'success', summary: 'success', detail: message});
  }
}
