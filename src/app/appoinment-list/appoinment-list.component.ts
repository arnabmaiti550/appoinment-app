import { Component } from '@angular/core';
import { Appoinment } from '../models/appoinment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.scss']
})
export class AppoinmentListComponent implements OnInit {

  newAppoinmentTitle: string = "";
  newAppoinmentdate: Date = new Date();
  appoinments: Appoinment[] = [];

  ngOnInit(): void {
    let savedAppoinments = localStorage.getItem("appoinments");
    this.appoinments = savedAppoinments ? JSON.parse(savedAppoinments) : [];
  }

  //Methods
  addAppoinment() {
    console.log(this.newAppoinmentTitle, this.newAppoinmentdate)
    if (this.newAppoinmentTitle.trim().length && this.newAppoinmentdate) {
      const newAppoinment: Appoinment = {
        id: Date.now(),
        title: this.newAppoinmentTitle,
        date: this.newAppoinmentdate
      }

      this.appoinments.push(newAppoinment);
      this.newAppoinmentTitle = '';
      this.newAppoinmentdate = new Date();
      localStorage.setItem("appoinments", JSON.stringify(this.appoinments))
    }
  }

  deleteAppoinment(index: number) {
    this.appoinments.splice(index, 1);
    localStorage.setItem("appoinments", JSON.stringify(this.appoinments))
  }
}
