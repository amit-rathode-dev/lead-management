import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { FeatureModule } from './components/feature/feature.module'; 
import { UserRolesComponent } from './components/user-roles/user-roles.component';
import { AddUserComponent } from './components/add-user/add-user.component';

export const routes: Routes = [

    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: '', redirectTo: 'auth', pathMatch: 'full' }, // Redirect to Login page on app load
    { path: '**', redirectTo: 'auth/login' }, // Handle unknown routes



    {
            path: '',
            component: MainLayoutComponent,
            children:[
                { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
                // { path: 'Dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
                {
                    path:'user-roles',
                    component:UserRolesComponent
                  },
                  {
                    path:'add-user',
                    component:AddUserComponent
                  }
            
            ]
          },

       


    ];
