import { AutoCompleteComponent } from './auto-complete.component';
import { MockModule } from 'ng-mocks';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../../services/user/user.service';
import { AppOption } from '../../models';

import {
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator/jest';
import { fakeAsync, tick } from '@angular/core/testing';

describe('AutoCompleteComponent', () => {
  let spectator: Spectator<AutoCompleteComponent>;

  const appOptions: Array<AppOption> = [
    { name: 'Option 1', url: 'url-app-1' },
    { name: 'Option 2', url: 'url-app-2' },
    { name: 'Option 3', url: 'url-app-3' },
  ];
  const createComponent = createComponentFactory({
    component: AutoCompleteComponent,
    imports: [
      MockModule(MatAutocompleteModule),
      MockModule(MatFormFieldModule),
      MockModule(MatInputModule),
      MockModule(ReactiveFormsModule),
    ],
    providers: [mockProvider(UserService)],
    detectChanges: true,
  });

  beforeEach(fakeAsync(() => {
    spectator = createComponent({
      props: { placeHolder: 'Hello World', appOptions: appOptions },
    });
    tick();
    spectator.detectChanges();
  }));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should display placeholder in the autocomplete panel', () => {
    const inputElement = spectator.query('input');

    expect(inputElement).toHaveAttribute(
      'ng-reflect-placeholder',
      'Hello World'
    );
  });

  it('should display options in the autocomplete panel', () => {
    spectator.component.ngOnInit(); // Trigger ngOnInit to initialize filteredOptions
    // Simulate input value change
    // spectator.component.optionControl.setValue(appOptions()[1]);
    spectator.fixture.whenStable();

    // Open the autocomplete panel
    const matOption = spectator.queryAll('mat-option');
    spectator.click(matOption[0]);
    spectator.detectChanges();

    const options = spectator.queryAll('mat-option');
    expect(options.length).toBe(3);
    expect(options[0].textContent).toContain('Option 1');
  });

  it('should emit selected option URL', () => {
    spectator.component.ngOnInit();

    const emitSpy = jest.spyOn(
      spectator.component.selectedAppOptionUrl,
      'emit'
    );

    const option = spectator.queryAll('mat-option')[0];
    spectator.click(option);
    spectator.detectChanges();

    expect(emitSpy).toHaveBeenCalledWith('url-app-1');
  });

  it('should clear input value and focus on the input', () => {
    const inputElement = spectator.query('input');
    expect(inputElement).toBeTruthy();

    spectator.typeInElement('John Doe', inputElement!);

    const clearButton = spectator.query('button');
    expect(clearButton).toBeTruthy();

    spectator.click(clearButton!);
    expect(inputElement?.textContent).toBe('');
  });
});
