import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDinamicoPerguntaComponent } from './formulario-dinamico-pergunta.component';

describe('FormularioDinamicoPerguntaComponent', () => {
  let component: FormularioDinamicoPerguntaComponent;
  let fixture: ComponentFixture<FormularioDinamicoPerguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioDinamicoPerguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDinamicoPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
