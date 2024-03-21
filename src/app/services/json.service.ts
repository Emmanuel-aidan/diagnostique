import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  donnees: any[] = [];


  async getDatas(): Promise<any[]> {
      return await this.http.get<any[]>('../../../assets/Donnees.json').toPromise() as any[];
  }

  constructor(private http: HttpClient) {
    this.getDatas().then(data => {
      this.donnees = data;
    });
  }

  loadJsonData(filePath: string) {
    return this.http.get(filePath);
  }

  getJsonData() {
    return this.donnees;
  }

  setJsonData(data: any[]) {
    this.donnees = data;
  }

  filterData(age: string, sexe: string, department: string): any[] {
    return this.donnees.filter(item =>
      item.cla_age_5 === age &&
      item.libelle_sexe === sexe &&
      item.dept === department
    );
  }

}
