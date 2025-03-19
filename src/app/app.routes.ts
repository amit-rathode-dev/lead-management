import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { FeatureModule } from './components/feature/feature.module'; 

export const routes: Routes = [

    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: '', redirectTo: 'auth', pathMatch: 'full' }, // Redirect to Login page on app load
    { path: '**', redirectTo: 'auth/login' }, // Handle unknown routes


    // {
    //     path: 'Dashboard',
    //     component: MainLayoutComponent,
    //     loadChildren: () =>
    //       import('./components/feature/feature.module').then(
    //         (module) => module.FeatureModule
    //       )
    //   }

    {
            path: '',
            component: MainLayoutComponent,
            children:[
                { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
                { path: 'Dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
            ]
          }
    


    ];
