import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CircularchartComponent } from "../../components/circularchart/circularchart.component";
import { SimpleresumecardComponent } from "../../components/simpleresumecard/simpleresumecard.component";
import { LinealchartComponent } from "../../components/linealchart/linealchart.component";
import { BarchartComponent } from "../../components/barchart/barchart.component";
import { RadarchartComponent } from "../../components/radarchart/radarchart.component";
import { FancylistComponent } from "../../components/fancylist/fancylist.component";
import { TeampresentationComponent } from "../../components/teampresentation/teampresentation.component";

@Component({
  selector: 'dashboard-page',
  standalone: true,
  imports: [
    CommonModule,
    CircularchartComponent,
    SimpleresumecardComponent,
    LinealchartComponent,
    BarchartComponent,
    RadarchartComponent,
    FancylistComponent,
    TeampresentationComponent
],
  templateUrl: './dashboardPage.compoment.html',
  styleUrl: './dashboardPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent { }
