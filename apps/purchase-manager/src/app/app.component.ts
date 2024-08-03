import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    MatCardActions,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'purchase-manager';
}
