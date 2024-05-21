import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatSidenav} from "@angular/material/sidenav";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenav, MatToolbar, MatToolbarRow, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'family-central';
  logoPath = 'assets/images/logo.png'
}
