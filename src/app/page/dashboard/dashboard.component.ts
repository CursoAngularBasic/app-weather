import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'app-weather';

  constructor(private dashboardSrv:DashboardService) { }

  ngOnInit(): void {
    debugger;
   var req={
      city:'cordoba',
      unit:'metric'
    }
    this.dashboardSrv.getCurrentWeatherByCitiName(req).subscribe((data)=>{
      console.log(data)
    })
  }

}
