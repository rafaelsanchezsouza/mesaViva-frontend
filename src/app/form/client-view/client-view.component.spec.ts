import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDinamicoConsumidorComponent } from './client-view.component';

describe('FormularioDinamicoConsumidorComponent', () => {
  let component: FormularioDinamicoConsumidorComponent;
  let fixture: ComponentFixture<FormularioDinamicoConsumidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioDinamicoConsumidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDinamicoConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
