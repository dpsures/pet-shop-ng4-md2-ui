import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {CdkTableModule} from '@angular/cdk';
import 'hammerjs';

import { AppRoutingModule } from "./app.routing";

import { AppComponent } from './app.component';
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PetsDetailsSnackbarComponent } from './pets-details-snackbar/pets-details-snackbar.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListPetsComponent } from './list-pets/list-pets.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationDialogComponent,
    DashboardComponent,
    PetsDetailsSnackbarComponent,
    ListUsersComponent,
    ListPetsComponent
  ],
  entryComponents : [RegistrationDialogComponent, PetsDetailsSnackbarComponent],
  imports: [
    BrowserModule,BrowserAnimationsModule,MaterialModule,FlexLayoutModule,AppRoutingModule,FormsModule,ReactiveFormsModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
