import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiagnostiqueComponent } from './components/diagnostique/diagnostique.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {AccueilComponent} from "./components/accueil/accueil.component";
import {StatistiquesComponent} from "./components/statistiques/statistiques.component";
import {ResultatsComponent} from "./components/resultats/resultats.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DiagnostiqueComponent,
    AccueilComponent,
    StatistiquesComponent,
    ResultatsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
