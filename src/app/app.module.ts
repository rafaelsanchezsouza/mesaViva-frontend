import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioDinamicoConsumidorComponent } from './form/client-view/client-view.component';
import { FormularioDinamicoPerguntaComponent } from './form/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
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
