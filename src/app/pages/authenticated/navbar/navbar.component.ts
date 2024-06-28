import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router: Router,private activatedRoute:ActivatedRoute) {}
  ngOnInit(){
  }
  isCollapsed: boolean = false;
  isActive=false;
  sidebarItems = [
    {
      name: 'Dashboard',
      icon: 'assets/db-icons/home.svg',
      route: '/dashboard',
    },
    {
      name: 'Employee Listing',
      icon: 'pi pi-database',
      route: 'employee/list',
    },
    {
      name: 'Add Employee',
      icon: 'pi pi-plus',
      route: 'employee/create',
    },
    
    
    
  ];

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  redirectTo(link: string) {
    this.router.navigateByUrl(link);
  }
}
