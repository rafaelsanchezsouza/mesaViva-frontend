import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FormControlBase }     from '../../form-control/form-control-base';

@Component({
  selector: 'app-pergunta',
  templateUrl: './product.component.html'
})
export class FormularioDinamicoPerguntaComponent {
  @Input() question: FormControlBase<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}