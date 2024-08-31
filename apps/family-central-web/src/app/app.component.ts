import { Component } from '@angular/core';

import { MatToolbar } from '@angular/material/toolbar';
import { NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './components/navigation/navigation-bar.component';

@Component({
  standalone: true,
  imports: [MatToolbar, NgOptimizedImage, RouterOutlet, NavigationBarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'family-central';
}
