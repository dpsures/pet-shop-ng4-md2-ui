import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';

import { AppRoutingModule } from "./app.routing";

import { AppComponent } from './app.component';
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PetsDetailsSnackbarComponent } from './pets-details-snackbar/pets-details-snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationDialogComponent,
    DashboardComponent,
    PetsDetailsSnackbarComponent
  ],
  entryComponents : [RegistrationDialogComponent, PetsDetailsSnackbarComponent],
  imports: [
    BrowserModule,BrowserAnimationsModule,MaterialModule,FlexLayoutModule,AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
