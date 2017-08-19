import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

const  APP_ROUTING : Routes = [
    {path : '', redirectTo : '/dashboard', pathMatch : 'full'},
    {path : 'dashboard', component : DashboardComponent}
];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTING);