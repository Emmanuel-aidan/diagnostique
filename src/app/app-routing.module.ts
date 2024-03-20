import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiagnostiqueComponent} from "./diagnostique/diagnostique.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {StatistiquesComponent} from "./statistiques/statistiques.component";

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'diagnostique', component: DiagnostiqueComponent},
  { path: 'statistiques', component:StatistiquesComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
