import { Injectable } from '@angular/core';
import { employeeManagement } from './employee.type';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: employeeManagement.employeeList[] = [
    {
      ID: '1',
      EMPLOYEE_NAME: 'John Doe',
      CONTACT_NO: '1234567890',
      EMAIL: 'john.doe@example.com',
      ADDRESS: '123 Main St, Anytown, USA'
    },
    {
      ID: '2',
      EMPLOYEE_NAME: 'Jane Smith',
      CONTACT_NO: '0987654321',
      EMAIL: 'jane.smith@example.com',
      ADDRESS: '456 Oak Ave, Othertown, USA'
    },
    {
      ID: '3',
      EMPLOYEE_NAME: 'Emily Johnson',
      CONTACT_NO: '5551234567',
      EMAIL: 'emily.johnson@example.com',
      ADDRESS: '789 Pine St, Sometown, USA'
    },
    {
      ID: '4',
      EMPLOYEE_NAME: 'Michael Brown',
      CONTACT_NO: '4445678901',
      EMAIL: 'michael.brown@example.com',
      ADDRESS: '101 Maple Rd, Anothertown, USA'
    },
    {
      ID: '5',
      EMPLOYEE_NAME: 'Jessica Davis',
      CONTACT_NO: '3334567892',
      EMAIL: 'jessica.davis@example.com',
      ADDRESS: '202 Cedar Ln, Yetanothertown, USA'
    },
    {
      ID: '6',
      EMPLOYEE_NAME: 'David Wilson',
      CONTACT_NO: '2225678903',
      EMAIL: 'david.wilson@example.com',
      ADDRESS: '303 Birch Blvd, Smalltown, USA'
    },
    {
      ID: '7',
      EMPLOYEE_NAME: 'Sophia Martinez',
      CONTACT_NO: '1116789012',
      EMAIL: 'sophia.martinez@example.com',
      ADDRESS: '404 Elm St, Largetown, USA'
    },
    {
      ID: '8',
      EMPLOYEE_NAME: 'Daniel Anderson',
      CONTACT_NO: '6667890123',
      EMAIL: 'daniel.anderson@example.com',
      ADDRESS: '505 Walnut Dr, Newtown, USA'
    },
    {
      ID: '9',
      EMPLOYEE_NAME: 'Olivia Thomas',
      CONTACT_NO: '7778901234',
      EMAIL: 'olivia.thomas@example.com',
      ADDRESS: '606 Spruce Cir, Oldtown, USA'
    },
    {
      ID: '10',
      EMPLOYEE_NAME: 'Matthew Jackson',
      CONTACT_NO: '8889012345',
      EMAIL: 'matthew.jackson@example.com',
      ADDRESS: '707 Poplar Ct, Middletown, USA'
    },
    {
      ID: '11',
      EMPLOYEE_NAME: 'Liam White',
      CONTACT_NO: '1112233445',
      EMAIL: 'liam.white@example.com',
      ADDRESS: '808 Maple St, Uptown, USA'
    },
    {
      ID: '12',
      EMPLOYEE_NAME: 'Mia Harris',
      CONTACT_NO: '2223344556',
      EMAIL: 'mia.harris@example.com',
      ADDRESS: '909 Birch Blvd, Suburbia, USA'
    },
    {
      ID: '13',
      EMPLOYEE_NAME: 'Noah Clark',
      CONTACT_NO: '3334455667',
      EMAIL: 'noah.clark@example.com',
      ADDRESS: '1010 Pine Ln, Bigcity, USA'
    },
    {
      ID: '14',
      EMPLOYEE_NAME: 'Ava Lewis',
      CONTACT_NO: '4445566778',
      EMAIL: 'ava.lewis@example.com',
      ADDRESS: '1111 Cedar St, Hometown, USA'
    },
    {
      ID: '15',
      EMPLOYEE_NAME: 'Elijah Walker',
      CONTACT_NO: '5556677889',
      EMAIL: 'elijah.walker@example.com',
      ADDRESS: '1212 Oak Dr, Rivertown, USA'
    }
  ];
  
  constructor() { }

  setEmployeeList(){
    console.log(this.employeeList);
    
    localStorage.setItem("employeeList", JSON.stringify(this.employeeList) )
  }
  appendTask(employee:employeeManagement.employeeList){
   this.employeeList.push(employee);
   this.setEmployeeList();
  
  }
  deletEmployee(taskId:string){

   this.removeTaskById(taskId)
   this.setEmployeeList()
  }
 
  removeTaskById(id: string): void {
    const index = this.employeeList.findIndex(task => task.ID === id);
        if (index !== -1) {
      this.employeeList.splice(index, 1);
    }
  }
  searchKeyword(keyword:string){
    return this.employeeList.filter(employee => 
      employee.EMPLOYEE_NAME.toLowerCase().includes(keyword.toLowerCase()) ||
      employee.EMAIL.toLowerCase().includes(keyword.toLowerCase()) ||
      employee.CONTACT_NO.toLowerCase().includes(keyword.toLowerCase()) ||
      employee.ADDRESS.toLowerCase().includes(keyword.toLowerCase())
    );
  }
  
}
