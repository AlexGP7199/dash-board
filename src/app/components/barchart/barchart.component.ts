import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { ApexOptions } from 'apexcharts';

@Component({
  selector: 'component-barchart',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './barchart.component.html' ,
  styleUrl: './barchart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarchartComponent {
  @ViewChild('barChart', { static: true }) chartElement!: ElementRef;
  public chartOptions: ApexOptions;
  constructor(){
    this.chartOptions = {
      chart: {
        type: 'bar',
        height: "100%",
        width: "100%",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      fill: {
        colors: ['#2563eb', '#1d4ed8', '#1e40af']
      },
      series: [{
        data: [{
          x: 'category A',
          y: 10,
          fillColor: '#2563eb'
        }, {
          x: 'category B',
          y: 18,
          fillColor: '#1d4ed8'
        }, {
          x: 'category C',
          y: 13,
          fillColor: '#1e40af'
        },{
          x: 'category D',
          y: 6,
          fillColor: '#3b82f6'
        },]
      }]
    }
  }

  ngOnInit(): void {
    if (this.chartElement && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(this.chartElement.nativeElement, this.chartOptions as ApexOptions);
      chart.render();
    }
  }
 }
