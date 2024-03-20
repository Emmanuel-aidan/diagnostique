import { Component } from '@angular/core';
import {AbstractControl, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-diagnostique',
  templateUrl: './diagnostique.component.html',
  styleUrls: ['./diagnostique.component.css']
})
export class DiagnostiqueComponent {

  sexes = ['Homme', 'Femme', 'Tout'];

  departements = [
    '1-Ain',
    '2-Aisne',
    '3-Allier',
    '4-Alpes-de-Haute-Provence',
    '5-Hautes-Alpes',
    '6-Alpes-Maritimes',
    '7-Ardèche',
    '8-Ardennes',
    '9-Ariège',
    '10-Aube',
    '11-Aude',
    '12-Aveyron',
    '13-Bouches-du-Rhône',
    '14-Calvados',
    '15-Cantal',
    '16-Charente',
    '17-Charente-Maritime',
    '18-Cher',
    '19-Corrèze',
    '21-Côte-d Or',
    '22-Côtes dArmor',
    '23-Creuse',
    '24-Dordogne',
    '25-Doubs',
    '26-Drôme',
    '27-Eure',
    '28-Eure-et-Loir',
    '29-Finistère',
    '30-Gard',
    '31-Haute-Garonne',
    '32-Gers',
    '33-Gironde',
    '34-Hérault',
    '35-Ille-et-Vilaine',
    '36-Indre',
    '37-Indre-et-Loire ',
    '38-Isère',
    '39-Jura',
    '40-Landes',
    '41-Loir-et-Cher',
    '42-Loire',
    '43-Haute-Loire',
    '44-Loire-Atlantique',
    '45-Loiret',
    '46-Lot',
    '47-Lot-et-Garonne',
    '48-Lozère',
    '49-Maine-et-Loire',
    '50-Manche',
    '51-Marne',
    '52-Haute-Marne',
    '53-Mayenne',
    '54-Meurthe-et-Moselle',
    '55-Meuse',
    '56-Morbihan',
    '57-Moselle',
    '58-Nièvre',
    '59-Nord',
    '60-Oise',
    '61-Orne',
    '62-Pas-de-Calais',
    '63-Puy-de-Dôme',
    '64-Pyrénées-Atlantiques',
    '65-Hautes-Pyrénées',
    '66-Pyrénées-Orientales',
    '67-Bas-Rhin',
    '68-Haut-Rhin',
    '69-Rhône',
    '70-Haute-Saône',
    '71-Saône-et-Loire',
    '72-Sarthe',
    '73-Savoie',
    '74-Haute-Savoie',
    '75-Paris',
    '76-Seine-Maritime',
    '77-Seine-et-Marne',
    '78-Yvelines',
    '79-Deux-Sèvres',
    '80-Somme',
    '81-Tarn',
    '82-Tarn-et-Garonne',
    '83-Var',
    '84-Vaucluse',
    '85-Vendée',
    '86-Vienne',
    '87-Haute-Vienne',
    '88-Vosges',
    '89-Yonne',
    '90-Territoire de Belfort',
    '91-Essonne',
    '92-Hauts-de-Seine',
    '93-Seine-St-Denis',
    '94-Val-de-Marne',
    '95-Val-DOise',
    '2A-Corse-du-Sud ',
    '2B-Haute-Corse',
    '971-Guadeloupe',
    '972-Martinique',
    '973-Guyane',
    '974-La Réunion',
    '976-Mayotte'
    ]

  birthDateFormControl = new FormControl('', [Validators.required,  this.birthDateValidator.bind(this)]);
  formIsValid = true;


  birthDateValidator(control: AbstractControl): null | { underage: boolean } {
    if (control.value) {
      const birthDate = new Date(control.value);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age >= 18 ? null : { 'underage': true};
    }

    return null;
  }

  submitForm() {
    if (      this.birthDateFormControl.invalid) {
      // Affichez un message d'erreur ou effectuez une autre action appropriée
      console.log('Le diagnostique est invalide. Veuillez remplir tous les champs.');
      this.formIsValid = false;
      return;
    }

    // Si le diagnostique est valide, vous pouvez continuer avec le traitement de la soumission
    console.log('Le diagnostique est valide. Soumission en cours...');
    this.formIsValid = true;
  }

}