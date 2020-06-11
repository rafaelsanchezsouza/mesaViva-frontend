import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionBase }     from '../question-base';

@Component({
  selector: 'app-pergunta',
  templateUrl: './formulario-dinamico-pergunta.component.html'
})
export class FormularioDinamicoPerguntaComponent {
  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}