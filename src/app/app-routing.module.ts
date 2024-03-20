import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiagnostiqueComponent} from "./components/diagnostique/diagnostique.component";
import {AccueilComponent} from "./components/accueil/accueil.component";
import {StatistiquesComponent} from "./components/statistiques/statistiques.component";
import {ResultatsComponent} from "./components/resultats/resultats.component";

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'diagnostique', component: DiagnostiqueComponent},
  { path: 'statistiques', component:StatistiquesComponent},
  { path: 'resultats', component:ResultatsComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
