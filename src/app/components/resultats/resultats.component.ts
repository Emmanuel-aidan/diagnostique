import {Component, OnInit} from '@angular/core';
import {JsonService} from "../../services/json.service";

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
  donnees !: any[];

  constructor(public jsonService : JsonService) {
  }


  async ngOnInit() {
    this.donnees = this.jsonService.getJsonData();
  }

  ngOnChanges(){
    this.donnees=this.jsonService.getJsonData();
  }

  getTroisPlusGrandesNtop(): any[] {
    if (this.donnees) {
      return this.donnees.sort((a: { ntop: number; }, b: { ntop: number; }) => b.ntop - a.ntop).slice(0, 3);
    } else {
      return [];
    }
  }



}
