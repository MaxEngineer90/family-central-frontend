import { Component } from '@angular/core';
import { AppChooserComponent } from '@family-central-frontend/app-chooser';
import { MatToolbar } from '@angular/material/toolbar';
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  imports: [AppChooserComponent, MatToolbar, NgOptimizedImage],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'purchase-manager';
  protected readonly logoPath = '/images/logo.png';
}
