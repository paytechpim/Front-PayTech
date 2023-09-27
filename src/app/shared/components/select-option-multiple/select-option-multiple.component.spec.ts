import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOptionMultipleComponent } from './select-option-multiple.component';

describe('SelectOptionMultipleComponent', () => {
  let component: SelectOptionMultipleComponent;
  let fixture: ComponentFixture<SelectOptionMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOptionMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectOptionMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
