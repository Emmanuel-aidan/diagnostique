import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiagnostiqueComponent } from './diagnostique/diagnostique.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {AccueilComponent} from "./accueil/accueil.component";
import {StatistiquesComponent} from "./statistiques/statistiques.component";

@NgModule({
  declarations: [
    AppComponent,
    DiagnostiqueComponent,
    AccueilComponent,
    StatistiquesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
