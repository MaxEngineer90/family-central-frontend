import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardTitle
} from '@angular/material/card';

@Component({
  selector: 'lib-shared',
  standalone: true,
  imports: [
    RouterModule,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    MatCardActions
  ],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css'
})
export class SharedComponent {
}
