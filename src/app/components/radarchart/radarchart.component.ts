import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { ApexOptions } from 'apexcharts';

@Component({
  selector: 'component-radarchart',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './radarchart.component.html',
  styleUrl: './radarchart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadarchartComponent {
  @ViewChild('radarChart', { static: true }) chartElement!: ElementRef;
  public chartOptions: ApexOptions;
  constructor(){
    this.chartOptions = {
      chart: {
          height: '100%',
          width: '100%',
          type: 'radar',
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
      },
      series: [{
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20],
      }],

      colors: ['#2563eb'],
      yaxis:{
        show: false
      },
      xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June']
      },
      fill: {
        opacity: 0.5,
        colors: ['#2563eb']
      },
      stroke: {
          show: true,
          width: 2,
          colors: ['#2563eb'],
          dashArray: 0
      },
      markers: {
          size: 5,
          colors: ['#2563eb'],
          strokeColors: '#2563eb',
          strokeWidth: 2,
      },
  }
  }

  ngOnInit(): void {
    if (this.chartElement && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(this.chartElement.nativeElement, this.chartOptions as ApexOptions);
      chart.render();
    }
  }
 }
