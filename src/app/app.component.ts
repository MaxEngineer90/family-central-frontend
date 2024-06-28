import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { NgOptimizedImage } from '@angular/common';
import { AppChooserComponent } from './components/app-chooser/app-chooser.component';
import { MatOption } from '@angular/material/autocomplete';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenav,
    MatToolbar,
    MatToolbarRow,
    NgOptimizedImage,
    AppChooserComponent,
    MatOption,
    RouterLink,
    RouterLinkActive,
    MatFormField,
    MatInput,
    MatLabel,
    MatIcon,
    MatSelect,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly logoPath = 'assets/images/logo.png';
}
