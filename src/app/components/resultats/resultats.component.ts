import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
  donnees: any;
  //troisPlusGrandesNpop: any[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('../../../assets/DonneesFinales.json').subscribe(data => {
      this.donnees = data;
      console.log(this.donnees); // Vérifiez que les données sont correctement chargées
    });
  }

  getTroisPlusGrandesNpop(): any[] {
    if (this.donnees) {
      return this.donnees.sort((a: { npop: number; }, b: { npop: number; }) => b.npop - a.npop).slice(0, 3);
    } else {
      return [];
    }
  }
}
