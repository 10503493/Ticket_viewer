import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
l
 TicketTilte=['id','author_id','body','created_at','edited_at','url','section_id','updated_at']
  TicketDetails: any;
  constructor(private usersrv: UserserviceService) { }
  ngOnInit(): void {
    this.usersrv.update().subscribe(x => {
     // console.log(x["articles"][0])



      for(let i = 0; i < x["count"]; i++) 
      {this.TicketDetails=x["articles"][i]
        for(let j in this.TicketTilte)
        {
          console.log(this.TicketDetails[this.TicketTilte[j]])
        }
        
      }

    });


  }

}
