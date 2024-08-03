import { Component } from '@angular/core';
import { SharedComponent } from '@family-central-frontend/shared';

@Component({
  standalone: true,
  imports: [
    SharedComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'purchase-manager';
}
