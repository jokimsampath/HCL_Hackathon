import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login-component/login-component';
import { App } from './app';
import { HomeComponent } from './components/Home/home-component/home-component';
import { authGuard } from './auth/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard-component/dashboard-component';
import { PatientRegisterComponent } from './components/patient/patient-register-component/patient-register-component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // redirect to `first-component`
    { path: 'dashboard', component: DashboardComponent, canActivate:[authGuard] },
    { path: 'register', component: PatientRegisterComponent, canActivate:[authGuard] },
    { path: 'login', component: LoginComponent },
    //{ path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
];
