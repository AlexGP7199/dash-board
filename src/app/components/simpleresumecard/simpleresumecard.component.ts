import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'component-simpleresumecard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './simpleresumecard.component.html',
  styleUrl: './simpleresumecard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleresumecardComponent {
  @Input() 
  public title: string = 'Title';
  @Input() 
  public content: string = '0';
  @Input() 
  public stats: string = '0';
  @Input() 
  public footerlaber: string = '0';


 }
