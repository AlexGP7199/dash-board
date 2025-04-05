import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'component-fancylist',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './fancylist.component.html',
  styleUrl: './fancylist.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FancylistComponent { }
