import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartFontOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.component.html',
  styleUrls: ['./capacity.component.css']
})
export class CapacityComponent implements OnInit {

  public cdata: Capacity[] = [{
    cate: '累積',
    dmanp: 254,
    imanp: 420,
    yield: 223326,
    utilization: 26.59,
    data: {
      ylabel: ['TW', 'ASTA', 'AMCA', 'EMEA', 'CHINA', 'NZ', 'SZ', 'INDIA'],
      ydata: [80, 72, 90, 85, 80, 90, 85, 85],
      label: '稼動率'
    }
  }];

  public display: Capacity = this.cdata[0];

  public barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      labels: { fontColor: 'white' }
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: 'white',
          beginAtZero: true,
          // X軸增加千分號
          // callback: (value: any, args?: any): string => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        },
        gridLines: { color: 'rgba(255,255,255,0.1)' }
      }],
      yAxes: [{
        ticks: {
          fontColor: 'white',
          fontSize: 12,
          // 設定最小值
          suggestedMin: 30,
          // 設定最大值-未設定為自動
          suggestedMax: 100,
          // y軸加百分比
          callback: (value: any, args?: any): string => value + '%'
        },
        gridLines: { color: 'rgba(255,255,255,0.1)' },

      }]
    }
  };
  public barChartLabels: Label[] = this.display.data.ylabel;
  public barChartData: ChartDataSets[] = [
    { data: this.display.data.ydata, label: this.display.data.label }
  ];
  public barChartType: ChartType = 'bar';
  // 圖示是否顯示
  public barChartLegend = false;
  public barChartColors: Color[] = [
    {
      hoverBackgroundColor: 'rgba(255, 255, 255, 1)',
      backgroundColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderColor: 'rgba(255, 99, 132, 1)',
      // 設定外框寬0
      borderWidth: 0,
      pointHoverBorderColor: 'rgba(179,181,198,1)'
    }
  ];
  public barChartPlugins = [];


  constructor() { }

  ngOnInit() {
  }

}

export interface Capacity {
  // 類別 Category ex.
  cate: string;
  // 直接人力 Direct Man Power
  dmanp: number;
  // 間接人力 Indirect Man Power
  imanp: number;
  // 產量 Yield
  yield: number;
  // 稼動率 Utilization
  utilization: number;
  // 資料
  data: Chat;
}

export interface Chat {
  ylabel: string[];
  ydata: number[];
  label: string;
}
