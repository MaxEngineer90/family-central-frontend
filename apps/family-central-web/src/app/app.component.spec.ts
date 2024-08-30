import { AppComponent } from './app.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockModule } from 'ng-mocks';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [
      MockModule(CommonModule),
      MockModule(ReactiveFormsModule),
      MockModule(MatAutocompleteModule),
      MockModule(MatFormFieldModule),
      MockModule(MatInputModule),
      MockModule(MatIconModule),
      MockModule(MatToolbarModule),
    ],
    detectChanges: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the component', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should render label', () => {
    spectator.detectChanges(); // Trigger change detection
    const titleElement = spectator.query('label'); // Query for <h1> element
    expect(titleElement?.textContent).toContain('Family-Central');
  });

  it(`should have as title 'family-central'`, () => {
    const app = spectator.component; // Access the component instance
    expect(app.title).toEqual('family-central');
  });
});
