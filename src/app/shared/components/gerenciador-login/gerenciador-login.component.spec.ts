import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorLoginComponent } from './gerenciador-login.component';

describe('GerenciadorLoginComponent', () => {
  let component: GerenciadorLoginComponent;
  let fixture: ComponentFixture<GerenciadorLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciadorLoginComponent]
    });
    fixture = TestBed.createComponent(GerenciadorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
