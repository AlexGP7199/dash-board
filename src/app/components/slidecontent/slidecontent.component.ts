import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinealchartComponent } from "../linealchart/linealchart.component";
import { CircularchartComponent } from "../circularchart/circularchart.component";
import { SimpleresumecardComponent } from "../simpleresumecard/simpleresumecard.component";
import { BarchartComponent } from "../barchart/barchart.component";
import { RadarchartComponent } from "../radarchart/radarchart.component";
import { FancylistComponent } from "../fancylist/fancylist.component";
import { TeampresentationComponent } from '../teampresentation/teampresentation.component';
import { DashboardPageComponent } from "../../pages/dashboardPage/dashboardPage.component";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'component-slidecontent',
    standalone: true,
    templateUrl: './slidecontent.component.html',
    styleUrl: './slidecontent.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    RouterModule,
    CommonModule,
    LinealchartComponent,
    CircularchartComponent,
    SimpleresumecardComponent,
    BarchartComponent,
    RadarchartComponent,
    FancylistComponent,
    TeampresentationComponent,
    DashboardPageComponent
]
})
export class SlidecontentComponent {
}
