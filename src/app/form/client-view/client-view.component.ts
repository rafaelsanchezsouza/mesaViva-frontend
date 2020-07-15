import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { FormControlBase }              from '../../form-control/form-control-base';
import { FormControlService }    from '../../form-control/form-control.service';
import { HttpRequestsService } from '../../database/http-requests.service';

@Component({
  selector: 'app-formulario-dinamico-consumidor',
  templateUrl: './client-view.component.html',
  providers: [ FormControlService ]
})
export class FormularioDinamicoConsumidorComponent implements OnInit {

  @Input() questions: FormControlBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  order = {
    name: '',
    email: '',
    contact: '',
    address: '',
    products: '',
    };
  submitted = false;

  constructor(
      private qcs: FormControlService,
      private requestsService: HttpRequestsService,
    ) {  }
  

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    const data = {
      title: "Pedido #",
      description: JSON.stringify(this.form.getRawValue()),
    } 
    this.payLoad = JSON.stringify(this.form.getRawValue());
    // Criar função prepara pedido
    const pedidoPreparado =  this.form.getRawValue();

    // injeta pedido.service no componente
    this.requestsService.salvaPedido(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });

    // console.log("TESTE");
    // console.log(this.payLoad[1]);
  }
}