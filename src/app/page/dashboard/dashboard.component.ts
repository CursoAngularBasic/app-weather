import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { CurrentResponse } from 'src/app/models/current-response.model';
import { Daily } from 'src/app/models/daily.model';
import { Hourly } from 'src/app/models/hourly.model';
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
  hourly : Array<Hourly> = new Array<Hourly>();
  daily: Array<Daily> = new Array<Daily>();

  @ViewChild('city') city!:ElementRef;
  constructor(private dashboardSrv:DashboardService) { }

  ngOnInit(): void {
   var req={
      city:'cordoba',
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
      lon
    }

    this.dashboardSrv.getHourly(req).subscribe(data=>{
      if (data) {
        this.hourly = data.hourly;
        this.hourly.forEach(x=>{
          x.dtFormat = moment(x.dt * 1000).lang('es').format('HH:mm');
          x.temp = Math.round(x.temp);
        })

        this.daily = data.daily;
        this.daily.forEach(d=>{
          d.fecha = moment(d.dt * 1000).lang('es').format('ddd, DD MMM');
          d.temp.min = Math.round(d.temp.min);
          d.temp.max = Math.round(d.temp.max);
        })
      } else {
        Swal.fire({
          title:'Error',
          icon:'error',
          text: "Ocurrió un error al obtener los datos de las próximas horas y días"
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
    )
  }

}
