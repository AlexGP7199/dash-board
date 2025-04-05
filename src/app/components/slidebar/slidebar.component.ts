import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'component-slidebar',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule


    ],
    templateUrl: './slidebar.component.html',
    styleUrl: './slidebar.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlidebarComponent { }
