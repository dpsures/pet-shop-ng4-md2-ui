import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';

import { PetsDetailsSnackbarComponent } from "../pets-details-snackbar/pets-details-snackbar.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pets = [
    {name : "Dog", img : "1.jpg", rows : 1},
    {name : "Rat", img : "5.jpg", rows : 1},
    {name : "Dog", img : "6.jpg", rows : 1},
    {name : "Dog", img : "7.jpg", rows : 1},
    {name : "Cat", img : "2.jpg", rows : 1},
    {name : "Dog", img : "3.jpg", rows : 1},
    {name : "Cat", img : "4.jpg", rows : 1},
    {name : "Parrot", img : "8.jpg", rows : 1},
    {name : "Dog", img : "9.jpg", rows : 1},
    {name : "Dog", img : "10.jpg", rows : 1},
    {name : "Dove", img : "11.jpg", rows : 1}
  ];

  constructor(public snackBar : MdSnackBar) { }

  ngOnInit() {
  }

  showDetails(pet) {
    this.snackBar.openFromComponent(PetsDetailsSnackbarComponent, {
      duration : 6000,
    });
  }
}
