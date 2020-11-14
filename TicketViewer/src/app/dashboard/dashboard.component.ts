import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  ViewTickets()
  {
   window.location.href = "/tickets";
  }
ReadMe()
{
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
ViewDetails()
{
  window.location.href = "/ticket-details";
 
}
}
