import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = 
[{ path:'',component:DashboardComponent},
{path:'tickets',component:TicketsComponent},
{path:'ticket-details',component:TicketDetailsComponent},
{path:'**',redirectTo:''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
