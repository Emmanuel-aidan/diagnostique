import { Component } from '@angular/core';
import {AbstractControl, FormControl, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-diagnostique',
  templateUrl: './diagnostique.component.html',
  styleUrls: ['./diagnostique.component.css']
})
export class DiagnostiqueComponent {

  sexes = ['Hommes', 'Femmes', 'tous sexes'];

  departements = [
    '18-Cher',
    '28-Eure-et-Loir',
    '36-Indre',
    '37-Indre-et-Loire ',
    '41-Loir-et-Cher',
    '45-Loiret'
  ]

  birthDateFormControl = new FormControl('', [Validators.required,  this.birthDateValidator.bind(this)]);
  formIsValid = true;

  departementFormControl = new FormControl('', [Validators.required]);
  sexeFormControl = new FormControl('', [Validators.required]); //this.sexes[0]

  constructor(private router: Router, public jsonService : JsonService) {}

  parseDepartement(department: string | null): string {
    if (!department) {
      return '';
    }else{
      const index = department.indexOf('-');
      if (index !== -1) {
        return department.substring(0, index);
      } else {
        return department;
      }
    }
  }



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
  intervalleAge(age: number): string {

    switch (true) {
      case (age >= 20 && age <= 24):
        return "20-24";
      case (age >= 25 && age <= 29):
        return "25-29";
      case (age >= 30 && age <= 34):
        return "30-34";
      case (age >= 35 && age <= 39):
        return "35-39";
      case (age >= 40 && age <= 44):
        return "40-44";
      case (age >= 45 && age <= 49):
        return "45-49";
      case (age >= 50 && age <= 54):
        return "50-54";
      case (age >= 55 && age <= 59):
        return "55-59";
      case (age >= 60 && age <= 64):
        return "60-64";
      case (age >= 65 && age <= 69):
        return "65-69";
      case (age >= 70 && age <= 74):
        return "70-74";
      case (age >= 75 && age <= 79):
        return "75-79";
      case (age >= 80 && age <= 84):
        return "80-84";
      case (age >= 85 && age <= 89):
        return "85-89";
      case (age >= 90 && age <= 94):
        return "90-94";
      case (age >= 95 && age <= 99):
        return "95-99";
    default:
      return "Autre";
  }}


  submitForm() {
    if (this.birthDateFormControl.invalid) {
      // Affichez un message d'erreur ou effectuez une autre action appropriée
      console.log('Le diagnostique est invalide. Veuillez remplir tous les champs.');
      this.formIsValid = false;
      return;
    }

    // Si le diagnostique est valide, vous pouvez continuer avec le traitement de la soumission
    console.log('Le diagnostique est valide. Soumission en cours...');
    this.formIsValid = true;
    const departementValue = this.parseDepartement(this.departementFormControl.value) || '';
    const age = this.birthDateFormControl.value!;
    const birthDate: Date= new Date(age);
    const currentDate : Date = new Date();
    const differenceInMilliseconds: number = currentDate.getTime() - birthDate.getTime();
    const millisecondsInYear: number = 1000 * 60 * 60 * 24 * 365.25;
    const agePersonne: number = Math.floor(differenceInMilliseconds / millisecondsInYear);
    const intervalleAge : string = this.intervalleAge(agePersonne);
    console.log(intervalleAge);

    console.log(age);
    console.log("agePersonne",agePersonne);
    const sexe = this.sexeFormControl.value?.toLowerCase() || '';
    this.jsonService.setJsonData(this.jsonService.filterData(intervalleAge, sexe, departementValue));
    this.router.navigate(['/resultats']);
  }

}
