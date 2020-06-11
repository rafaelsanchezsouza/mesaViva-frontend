import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { FormularioConsumidorComponent } from './formulario-consumidor/formulario-consumidor.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioDinamicoConsumidorComponent } from './formulario-dinamico-consumidor/formulario-dinamico-consumidor.component';
import { FormularioDinamicoPerguntaComponent } from './formulario-dinamico-pergunta/formulario-dinamico-pergunta.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    FormularioConsumidorComponent,
    FormularioDinamicoConsumidorComponent,
    FormularioDinamicoPerguntaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
