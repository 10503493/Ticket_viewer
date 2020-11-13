import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  TicketTilte = ['id', 'author_id', 'body', 'created_at', 'edited_at', 'url', 'section_id', 'updated_at']
  TicketDetails: any;
  constructor(private usersrv: UserserviceService) { }
  ngOnInit(): void {
    this.usersrv.update().subscribe(x => {
              for (let i = 0; i < x["count"]; i++) 
      {
        document.write("Ticket Number:"+(i+1)+"<br>")
        this.TicketDetails = x["articles"][i]
        for (let j in this.TicketTilte) {
          document.write( this.TicketTilte[j]+" :"+this.TicketDetails[this.TicketTilte[j]]+"<br>")
        }
        document.write("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"+"<br><br>")
      }
    });


  }

}
