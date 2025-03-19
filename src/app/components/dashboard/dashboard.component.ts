
import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexAnnotations,
  ApexFill,
  ApexStroke,
  ApexGrid,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: any; //ApexXAxis;
  annotations: ApexAnnotations;
  fill: ApexFill;
  stroke: ApexStroke;
  grid: ApexGrid;
};





import { CardModule } from 'primeng/card';

import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProgressBarModule, CardModule, NgApexchartsModule,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {




  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: any;
  public secondChart!: any;
  public pieChart!: any;


  constructor() {


    this.chartOptions = {
      series: [
        {
          name: "Lead Generation count",
          data: [44, 55, 41, 67, 22, 43],
          color: "#19988B"

        }
      ],
      chart: {
        type: "bar",
        height: 250
      },
      colors: ["#19988B"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
        ],
      },

      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical", 
          shadeIntensity: 0.5,
          gradientToColors: ["#19988B"],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100], 
          colorStops: [
            {
              offset: 0,
              color: "#19988B", 
              opacity: 1
            },
            {
              offset: 100,
              color: "#FFFFFF", 
              opacity: 1
            }
          ]
        }
      },
    
      tooltip: {},
      legend: {

        markers: {
          width: 14,
          height: 8,
          radius: 2
        }
      }
    };



    this.secondChart = {
      series: [
        {
          name: "Sales Representative",
          data: [44, 55, 57, 56, 61, 58],
          color: "#19988B"
        },
        {
          name: "GOEM",
          data: [76, 85, 101, 98, 87, 105],
          color: "#C5DEDB"

        }
      ],
      chart: {
        type: "bar",
        height: 250
      },
      colors: ["#19988B", "#C5DEDB"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
      },

      fill: {
        opacity: 1
      },
      tooltip: {},
      legend: {

        markers: {
          width: 14,
          height: 8,
          radius: 2
        }
      }
    };






    this.pieChart = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut",
        width: 250,  // Reduced width
        height: 250  // Reduced height
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 180, // Adjusted for small screens
              height: 2000
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };


  }











}
