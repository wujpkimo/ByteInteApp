import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartFontOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Revenuedata } from '../revenuedata';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

  public rdata: Revenuedata[] = [{
    name: '全球',
    yearTarget: 840000,
    summary: 223326,
    achievingRate: 26.59,
    wip: 30000,
    estrevenue: 500000,
    data: [{
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90000, 66326, 68000], label: '營收'
    }]
  }, {
    name: '中國',
    yearTarget: 340000,
    summary: 123326,
    achievingRate: 16.59,
    wip: 20000,
    estrevenue: 400000,
    data: [{
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40000, 26326, 18000], label: '營收'
    }]
  }, {
    name: '海外',
    yearTarget: 500000,
    summary: 100000,
    achievingRate: 35.59,
    wip: 10000,
    estrevenue: 100000,
    data: [{
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50000, 40000, 50000], label: '營收'
    }]
  }];

  public display: Revenuedata = this.rdata[0];

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
          callback: (value: any, args?: any): string => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        },
        gridLines: { color: 'rgba(255,255,255,0.1)' }
      }],
      yAxes: [{
        ticks: {
          fontColor: 'white',
          fontSize: 12,
        },
        gridLines: { color: 'rgba(255,255,255,0.1)' },
      }]
    }
  };
  public barChartLabels: Label[] = ['12月', '11月', '10月', '9月', '8月', '7月', '6月', '6月', '5月', '4月', '3月', '2月', '1月'];
  public barChartType: ChartType = 'horizontalBar';
  // 圖示是否顯示
  public barChartLegend = false;
  public barChartColors: Color[] = [
    {
      hoverBackgroundColor: 'rgba(255, 255, 255, 1)',
      backgroundColor: ['rgba(54, 162, 235, 1)',
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

  // public barChartData: ChartDataSets[] = [
  //   { data: this.display.data, label: '盈收' }
  // ];

  constructor(
  ) {
  }

  ngOnInit() {
  }

  onSelect(region: Revenuedata) {
    this.display = region;
  }
}
