import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-userpage',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './userpage.component.html',
  styleUrl: './userpage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserpageComponent { }
