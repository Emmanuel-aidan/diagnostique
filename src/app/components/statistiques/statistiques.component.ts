import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit{

  departements = [
    '18-Cher',
    '28-Eure-et-Loir',
    '36-Indre',
    '37-Indre-et-Loire ',
    '41-Loir-et-Cher',
    '45-Loiret'
    ]
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  public barchart: any;
  public pie: any;
  public line: any;


  createChart(){

    this.barchart = new Chart("barCart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['18-Cher',
          '28-Eure-et-Loir',
          '36-Indre',
          '37-Indre-et-Loire ',
          '41-Loir-et-Cher',
          '45-Loiret' ],
        datasets: [
          {
            label: "Hommes",
            data: ['467','576', '572', '79', '92',
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
        aspectRatio:2.5
      }

    });
    this.pie = new Chart("pie", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Cancer','Gastro','Covid'],
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
        aspectRatio:2.5
      }

    });
  }
}
