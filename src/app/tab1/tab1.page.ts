import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/Appointment';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {
  newTitle: String = "";
  newDate: Date = new Date();

  appointments: Appointment[] = []

  ngOnInit(): void {
    let storageAppointments = localStorage.getItem('appointments')
    this.appointments = storageAppointments ? JSON.parse(storageAppointments) : []
  }

  addAppointment() {
    if (this.newTitle.trim().length && this.newDate) {
      let newAppointmet: Appointment = {
        id: Date.now(),
        title: this.newTitle,
        date: this.newDate
      }

      this.appointments.push(newAppointmet);
      this.newDate = new Date();
      this.newTitle = "";

      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(id: number) {
    this.appointments.splice(id, 1)
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }

}
