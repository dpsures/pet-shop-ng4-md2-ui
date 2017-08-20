import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ListUsersComponent } from "./list-users/list-users.component";
import { ListPetsComponent } from "./list-pets/list-pets.component";

const  APP_ROUTING : Routes = [
    {path : '', redirectTo : '/dashboard', pathMatch : 'full'},
    {path : 'dashboard', component : DashboardComponent},
    {path : 'showUsers', component : ListUsersComponent},
    {path : 'showPets', component : ListPetsComponent}
];

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTING);