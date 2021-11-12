import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentResponse } from 'src/app/models/current-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private API_URL:string=environment.URL+'/data/2.5';
  private KEY:string=environment.openWeatherApiKey;
  private LANG:string = '&lang=es';
  constructor(private http:HttpClient) { }

  getCurrentWeatherByCitiName(data:any):Observable<CurrentResponse>{
    debugger;
    let url = `${this.API_URL}/weather?q=${data.city}&units${data.unit}&appid=${this.KEY}${this.LANG}`
    var response = this.http.get<CurrentResponse>(url) 
    return response;
  }
}
