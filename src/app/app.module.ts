import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { ProdutosComponent } from './produtos/produtos.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AutocompleteComponent } from './autocomplete/autocomplete.component'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatCard, MatCardModule} from '@angular/material/card'; 
import {MatRadioModule} from '@angular/material/radio';
import { FormFieldComponent } from './form-field/form-field.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FuncionariosComponent,
    ProdutosComponent,
    AutocompleteComponent,
    CheckboxComponent,
    FormFieldComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
