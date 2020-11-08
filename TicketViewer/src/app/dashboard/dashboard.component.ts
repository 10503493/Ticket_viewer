import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private usersrv: UserserviceService) { }

  ngOnInit(): void {
    this.usersrv.update().subscribe(x => {
      
      console.log(x,'hhh')

    });
    console.log('hhh')

  }

}
