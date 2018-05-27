import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard-environment-statistics',
  templateUrl: './environment-statistics.component.html',
  styleUrls: ['./environment-statistics.component.scss']
})
export class EnvironmentStatisticsComponent implements OnInit, AfterViewInit {
  objectKeys = Object.keys;
  @Input() data: EnvironmentStatisticsDataSchema;
  @ViewChild('severitiesGraph') severitiesGraphElement;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    // Wrap chart initialization in timeout because css width changes interrupt its animation
    setTimeout(() => {
      const ctx = this.severitiesGraphElement.nativeElement.getContext('2d');
      const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['High', 'Medium', 'Low'],
          datasets: [{
            data: [
              this.data.Severities.High,
              this.data.Severities.Medium,
              this.data.Severities.Low,
            ],
            backgroundColor: [
              'rgb(213, 65, 65)',
              'rgb(243, 171, 16)',
              'rgb(65, 176, 213)',
            ],
            borderWidth: 0,
          }]
        },
        options: {
          legend: {
              display: false
          },
          cutoutPercentage: 90,
          maintainAspectRatio: false,
        },
      });
    }, 50);
  }

  /**
   * Round a number
   * @param num
   */
  round(num: number) {
    return num ? Math.round(num) : 0;
  }

  /**
   * Convert spacaes to HTML braek line element
   * @param string
   */
  spaceToBreakLine(string: string) {
    return string.replace(' ', '<br/>');
  }
}

interface EnvironmentStatisticsDataSchema {
  Types: Object;
  Severities: {
    High: number;
    Medium: number;
    Low: number;
  };
  Sources: Object;
}
