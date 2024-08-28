import { Component } from '@angular/core';
import { AppChooserComponent } from '@family-central-frontend/app-chooser';

@Component({
  standalone: true,
  imports: [
    AppChooserComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'purchase-manager';
}
