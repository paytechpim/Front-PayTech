import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberBoxPercentageComponent } from './number-box-percentage.component';

describe('NumberBoxPercentageComponent', () => {
  let component: NumberBoxPercentageComponent;
  let fixture: ComponentFixture<NumberBoxPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberBoxPercentageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberBoxPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
