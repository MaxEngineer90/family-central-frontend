import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AppChooserComponent } from '@family-central-frontend/app-chooser';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    CommonModule,
    AppChooserComponent,
    MatToolbar,
    NgOptimizedImage,
    RouterOutlet,
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBarComponent {
  readonly logoPath = 'assets/images/logo.png';

  private readonly router = inject(Router);

  navigateToSelectedApp(optionUrl: string) {
    this.router.navigateByUrl(optionUrl);
  }
}
