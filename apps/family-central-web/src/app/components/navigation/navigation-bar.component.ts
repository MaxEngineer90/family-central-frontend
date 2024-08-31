import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
import { AppOption, AutoCompleteComponent } from '@family-central-frontend/ui';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbar,
    NgOptimizedImage,
    RouterOutlet,
    AutoCompleteComponent,
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBarComponent {
  readonly logoPath = 'assets/images/logo.png';
  protected readonly appOptions: Array<AppOption> = [
    { name: 'einkauf-verwalten', url: '/purchase-manager' },
    { name: 'todo', url: '/todo' },
  ];
  private readonly router = inject(Router);

  navigateToSelectedApp(optionUrl: string) {
    this.router.navigateByUrl(optionUrl);
  }
}
