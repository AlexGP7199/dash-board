import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { initFlowbite } from 'flowbite'

@Component({
  selector: 'app-froms',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'./froms.component.html',
  styleUrl: './froms.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FromsComponent {

  ngOnInit() {
    initFlowbite()
  }
}
