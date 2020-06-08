import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-formulario-consumidor',
  templateUrl: './formulario-consumidor.component.html',
  styleUrls: ['./formulario-consumidor.component.css']
})
export class FormularioConsumidorComponent implements OnInit {

  model = new Pedido(18, ' ', ' ', ' ', ' ');

  constructor() { }

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  newPedido() {
    this.model = new Pedido(42, '', '', '', '');
  }

}
