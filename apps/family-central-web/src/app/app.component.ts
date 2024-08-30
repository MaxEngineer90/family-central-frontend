import {Component, inject} from '@angular/core';
import { AppChooserComponent } from '@family-central-frontend/app-chooser';
import { MatToolbar } from '@angular/material/toolbar';
import { NgOptimizedImage } from '@angular/common';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  standalone: true,
  imports: [AppChooserComponent, MatToolbar, NgOptimizedImage, RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'family-central';
  readonly logoPath = 'assets/images/logo.png';

  private readonly router = inject(Router);

  navigateToSelectedApp(optionUrl: string) {
    this.router.navigateByUrl(optionUrl);
  }
}
