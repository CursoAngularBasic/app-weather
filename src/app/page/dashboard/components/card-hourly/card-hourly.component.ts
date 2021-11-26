import { Component, Input, OnInit } from '@angular/core';
import { Hourly } from 'src/app/models/hourly.model';

@Component({
  selector: 'app-card-hourly',
  templateUrl: './card-hourly.component.html',
  styleUrls: ['./card-hourly.component.scss']
})
export class CardHourlyComponent implements OnInit {

  @Input() hourly:Array<Hourly> = new Array<Hourly>();
  constructor() { }

  ngOnInit(): void {
  }

}
