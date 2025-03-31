
import { CommonModule } from "@angular/common";
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
import { ReusablemodulesComponent } from "../shared/reusablemodules/reusablemodules.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReusablemodulesComponent, NgApexchartsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {




  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: any;
  public secondChart!: any;
  public pieChart!: any;
  public lastChartOption!: any;
  selectedPeriod: string = "Last 6 Months";
  lastSixMonths: string[] = [];
  lastThreeMonths: string[] = [];




  months: string[] = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  selectedMonth: string = this.months[new Date().getMonth()]; // ✅ Default to current month

  selectMonth(month: string) {
    this.selectedMonth = month; // ✅ Update when clicked
  }

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
        height: 200
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
        width: 0.5,
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
          height: 200
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
        },
        grid: {
          show: false  // 🚀 This removes the background horizontal lines
        }
      };




    this.pieChart = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut",
        width: 350,  
        height: 250 
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 180, 
              height: 2000
            },
            legend: {
              position: "top",
              horizontalAlign: 'left', 
            
            }
          }
        }
      ]
    };






    this.lastChartOption = {
      series: [
        {
          name: "Leads",
          data: [95, 85, 90, 75, 100] // Example data
        }
      ],
      chart: {
        type: "bar",
        height: 220
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
          endingShape: "rounded" // Rounded bars
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: false
      },
      xaxis: {
        categories: ["Zone1", "Zone2", "Zone3", "Zone4", "Zone5"]
      },
      yaxis: {
        title: {
          text: "Leads"
        }
      },
      fill: {
        type: "pattern",
        pattern: {
          style: "slantedLines", // ✅ Slanted lines pattern
          width: 8, // ✅ Adjust width for visibility
          height: 8,
          strokeWidth: 2, // ✅ Bold lines
          color: "#647E64" // ✅ Greenish color for the pattern
        }
      },
      colors: ["#D6E6E6"], // ✅ Light background color instead of blue
    
    
    };  


  }








  getLastMonths(count: number) {
    let today = new Date();
    let monthsArray = [];

    for (let i = 0; i < count; i++) {
      let monthIndex = (today.getMonth() - i + 12) % 12;
      monthsArray.push(this.months[monthIndex]);
    }

    if (count === 6) {
      this.lastSixMonths = monthsArray;
    } else if (count === 3) {
      this.lastThreeMonths = monthsArray;
    }
  }

  selectPeriod(period: string) {
    this.selectedPeriod = period; // ✅ Updates button label when clicked
  }


}
