import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudDashboardComponent } from './hud-dashboard.component';

describe('HudDashboardComponent', () => {
  let component: HudDashboardComponent;
  let fixture: ComponentFixture<HudDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HudDashboardComponent]
    });
    fixture = TestBed.createComponent(HudDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
