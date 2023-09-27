import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcuraFuncionarioComponent } from './procura-funcionario.component';

describe('ProcuraFuncionarioComponent', () => {
  let component: ProcuraFuncionarioComponent;
  let fixture: ComponentFixture<ProcuraFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcuraFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcuraFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
