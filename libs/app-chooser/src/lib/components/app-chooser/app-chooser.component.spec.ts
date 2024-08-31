import { AppChooserComponent } from './app-chooser.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MockModule } from 'ng-mocks';

describe('AppChooserComponent', () => {
  let spectator: Spectator<AppChooserComponent>;
  const createComponent = createComponentFactory({
    component: AppChooserComponent,
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

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should create the component', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should emit selected option URL on option selection', () => {
    const selectedOption = { name: 'todo', url: '/todo' };
    const emitSpy = jest.spyOn(
      spectator.component.selectedAppOptionUrl,
      'emit'
    );

    spectator.component.onOptionSelected(selectedOption);

    expect(emitSpy).toHaveBeenCalledWith('/todo');
  });

  it('should initialize with correct filtered options', () => {
    const selectedOption = {
      name: 'einkauf-verwalten',
      url: '/purchase-manager',
    };
    expect(spectator.component.filteredOptions).toBeDefined();

    spectator.component.optionControl.setValue(selectedOption);
    spectator.detectChanges();

    spectator.component.filteredOptions.subscribe((filtered) => {
      expect(filtered).toEqual(selectedOption);
    });
  });
});
