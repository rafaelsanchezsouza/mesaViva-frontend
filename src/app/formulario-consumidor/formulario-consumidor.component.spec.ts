import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioConsumidorComponent } from './formulario-consumidor.component';

describe('FormularioConsumidorComponent', () => {
  let component: FormularioConsumidorComponent;
  let fixture: ComponentFixture<FormularioConsumidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioConsumidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
