import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { FormControlBase }              from '../../form-control/form-control-base';
import { FormControlService }    from '../../form-control/form-control.service';

@Component({
  selector: 'app-formulario-dinamico-consumidor',
  templateUrl: './client-view.component.html',
  providers: [ FormControlService ]
})
export class FormularioDinamicoConsumidorComponent implements OnInit {

  @Input() questions: FormControlBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FormControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}