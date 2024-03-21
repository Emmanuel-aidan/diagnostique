import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';
import {JsonService} from "../../services/json.service";

interface PathologyItem {
  patho_niv1: string;
  patho_niv2: string;
  patho_niv3: string;
}
@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})

//Todo, à ameliorer
export class StatistiquesComponent implements OnInit {
  departements = [
    '18-Cher',
    '28-Eure-et-Loir',
    '36-Indre',
    '37-Indre-et-Loire ',
    '41-Loir-et-Cher',
    '45-Loiret'
  ]
  selectedDepartment: string = this.departements[0];
  donnees: PathologyItem[] = [
    { patho_niv1: "Cancer", patho_niv2: "Subpathology A", patho_niv3: "Pathology 3" },
    { patho_niv1: "Maladies cardio-vasculaires", patho_niv2: "Pathology 2", patho_niv3: "Pathology 3"},
    { patho_niv1: "Autre cancers", patho_niv2: "Subpathology C", patho_niv3: "Pathology 3" },
    // Add more items as needed
  ];

  constructor() { }

  ngOnInit(): void {
    this.displayPieChart();
  }



  displayPieChart(): void {
    const items = this.getTroisPlusGrandesNtop();
    const labels: string[] = [];
    const data: number[] = [];

    items.forEach(item => {
      // Assuming some logic to calculate data points
      // For demonstration purposes, assigning random data
      const dataPoint = Math.floor(Math.random() * 100);
      labels.push(item.patho_niv1);
      data.push(dataPoint);
    });

    const ctx = document.getElementById('myPieChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Maladies les plus courantes',
          data: data,
          backgroundColor: [
            'rgba(245, 135, 99, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            // Add more colors as needed
          ],
          borderWidth: 1
        }]
      }
    });

    const txc = document.getElementById('myBarChart') as HTMLCanvasElement;
    new Chart(txc, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Maladies les plus courantes',
          data: data,
          backgroundColor: [
            'rgba(245, 135, 99, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            // Add more colors as needed
          ],
          borderWidth: 1
        }]
      }
    });
  }

  getTroisPlusGrandesNtop(): PathologyItem[] {
    // Logic to return the three largest items
    // For demonstration purposes, returning the first three items
    return this.donnees ? this.donnees.slice(0, 3) : [];
  }




  /*
  createChart() {

    this.barchart = new Chart("barCart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['18-Cher',
          '28-Eure-et-Loir',
          '36-Indre',
          '37-Indre-et-Loire ',
          '41-Loir-et-Cher',
          '45-Loiret'],
        datasets: [
          {
            label: "Hommes",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Femmes",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'pink'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
    this.pie = new Chart("pie", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: [this.getTroisPlusGrandesNtop(), 'Gastro', 'Covid'],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

   */
}
