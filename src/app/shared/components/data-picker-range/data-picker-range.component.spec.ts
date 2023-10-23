import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPickerRangeComponent } from './data-picker-range.component';

describe('DataPickerRangeComponent', () => {
  let component: DataPickerRangeComponent;
  let fixture: ComponentFixture<DataPickerRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataPickerRangeComponent]
    });
    fixture = TestBed.createComponent(DataPickerRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
