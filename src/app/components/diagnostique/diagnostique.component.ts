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

  sexes = ['Hommes', 'Femmes', 'Tous sexes'];

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
    const age = Number(this.birthDateFormControl.value);
    console.log(age);
    const sexe = this.sexeFormControl.value?.toLowerCase() || '';
    this.jsonService.setJsonData(this.jsonService.filterData(age, sexe, departementValue));
    this.router.navigate(['/resultats']);
  }

}
