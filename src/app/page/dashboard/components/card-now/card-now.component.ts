import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CurrentResponse } from 'src/app/models/current-response.model';

@Component({
  selector: 'app-card-now',
  templateUrl: './card-now.component.html',
  styleUrls: ['./card-now.component.scss']
})
export class CardNowComponent implements OnInit, AfterViewInit {

  fecha: any;
  @Input() current: CurrentResponse = new CurrentResponse();
  constructor() { }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }

}
