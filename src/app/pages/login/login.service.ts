import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }

  isLogin() { 
    const roleItem = localStorage.getItem('role');  
    if (roleItem === 'Admin') {  
      return true;
    }
    return false;
  }
}
