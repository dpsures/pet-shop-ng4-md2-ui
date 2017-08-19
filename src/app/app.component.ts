import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig } from "@angular/material";
import { RegistrationDialogComponent } from "./registration-dialog/registration-dialog.component";

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(public dialog : MdDialog, public vcr : ViewContainerRef) {}

  ngOnInit(): void {
    
  }

  openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(RegistrationDialogComponent, config);
  }

}
