import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHourlyComponent } from './card-hourly.component';

describe('CardHourlyComponent', () => {
  let component: CardHourlyComponent;
  let fixture: ComponentFixture<CardHourlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHourlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHourlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
