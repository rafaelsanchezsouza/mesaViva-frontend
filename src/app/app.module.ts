import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { FormularioConsumidorComponent } from './formulario-consumidor/formulario-consumidor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    FormularioConsumidorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
