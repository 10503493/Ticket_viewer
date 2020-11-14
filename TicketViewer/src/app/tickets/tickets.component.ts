import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  TicketTilte = ['id', 'author_id', 'body', 'created_at', 'edited_at', 'url', 'section_id', 'updated_at']
  TicketDetails: any;

  constructor(private usersrv: UserserviceService) { }

  ngOnInit(): void
   {
  
    this.usersrv.update().subscribe(x => {
      for (let i = 0; i < x["count"]; i++) 
{
this.TicketDetails = x["articles"][i]

  document.write( this.TicketDetails["id"]+"<br>")

}
document.write("you have "+x["count"]+" tickets" )

});
  }
  ViewDetails()
  {
    console.log("dd")
  }
}
