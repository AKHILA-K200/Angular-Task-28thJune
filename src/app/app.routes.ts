import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/authenticated/dashboard/dashboard.component';
import { EmployeeListComponent } from './pages/authenticated/employee-list/employee-list.component';
import { EmployeeCreationComponent } from './pages/authenticated/employee-creation/employee-creation.component';
import { loginGuard } from './pages/guard/login.guard';

export const routes: Routes = [
    {   path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {path:'login',
        // canActivate:[!loginGuard],
        component:LoginComponent
    },
    {
        path:'',
        component:DashboardComponent,
        children:[
            {
                path:'employee/list',
                component:EmployeeListComponent,
                canActivate:[loginGuard]
            },
            {
                path:'employee/create',
                component:EmployeeCreationComponent,
                canActivate:[loginGuard]
            }
        ]
    }
];
