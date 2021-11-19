import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { CurrentResponse } from 'src/app/models/current-response.model';
import Swal from 'sweetalert2';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'app-weather';

  current: CurrentResponse = new CurrentResponse();

  @ViewChild('city') city!:ElementRef;
  constructor(private dashboardSrv:DashboardService) { }

  ngOnInit(): void {
   var req={
      city:'florida',
      unit:'metric'
    }
    
    this.getCurrent(req);
  }

  getCurrent(req:any){
    this.dashboardSrv.getCurrentWeatherByCitiName(req).subscribe((data)=>{
      if (data) {
        this.current = data;
        console.log(this.current);
        this.current.fecha = moment(this.current.dt * 1000).lang('es').format('dddd DD MMMM YYYY');
        this.current.main.temp = Math.round(this.current.main.temp);
        this.current.main.feels_like = Math.round(this.current.main.feels_like);
        
        this.getHourly(data.coord.lat,data.coord.lon);
      } else {
        Swal.fire({
          title:'Error',
          icon:'error',
          text:'No se encontro la ciudad'
        })
      }
    },
    (err)=>{
      Swal.fire({
        title:'Error',
        icon:'error',
        text: err.error.message
      })
    }
    );
  }

  find(){
    var ciudad = this.city.nativeElement.value;

    var req={
      city: ciudad,
      unit:'metric'
    }

    this.getCurrent(req);
  }

  getHourly(lat:any,lon:any){
    var req ={
      lat,
      lon,
      unit:'metric'
    }

    console.log(req);
    this.dashboardSrv.getHourly(req).subscribe(data=>{
      console.log(data);
    })
  }

}
