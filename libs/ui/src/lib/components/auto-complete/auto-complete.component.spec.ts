import { AutoCompleteComponent } from './auto-complete.component';
import { MockModule } from 'ng-mocks';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { byTestId, createComponentFactory, Spectator } from '@ngneat/spectator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

describe('AutoCompleteComponent', () => {
  let spectator: Spectator<AutoCompleteComponent>;
  const createComponent = createComponentFactory({
    component: AutoCompleteComponent,
    imports: [
      MockModule(MatAutocompleteModule),
      MockModule(MatFormFieldModule),
      MockModule(MatInputModule),
      MockModule(ReactiveFormsModule),
    ],
    detectChanges: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  xit('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  xit('should display options in the autocomplete panel', () => {
    //  spectator.component.; // Set the input
    spectator.component.ngOnInit(); // Trigger ngOnInit to initialize filteredOptions

    // Simulate input value change
    // spectator.component.optionControl.setValue(appOptions()[1]);
    spectator.detectChanges();

    // Open the autocomplete panel
    const input = spectator.query(byTestId('autocomplete-input'));
    spectator.click(input!);
    spectator.detectChanges();

    const options = spectator.queryAll('.mat-option');
    expect(options.length).toBe(1);
    expect(options[0].textContent).toContain('Option 1');
  });

  xit('should emit selected option URL', () => {
    // spectator.component.appOptions = appOptions;
    spectator.component.ngOnInit();

    spyOn(spectator.component.selectedAppOptionUrl, 'emit');

    // Simulate selecting an option
    const option = spectator.queryAll('.mat-option')[0];
    spectator.click(option);
    spectator.detectChanges();

    expect(spectator.component.selectedAppOptionUrl.emit).toHaveBeenCalledWith(
      '/option1'
    );
  });

  xit('should clear input value and focus on the input', () => {
    // Initialize input value
    //  spectator.component.optionControl.setValue(appOptions()[0]);
    spectator.detectChanges();

    // Spy on the focus method of input element
    spyOn(spectator.component.input.nativeElement, 'focus');

    // Simulate clear input button click
    const clearButton = spectator.query(byTestId('clear-input'));
    spectator.click(clearButton!);
    spectator.detectChanges();

    expect(spectator.component.optionControl.value).toBeNull();
    expect(spectator.component.input.nativeElement.focus).toHaveBeenCalled();
  });

  xit('should toggle panel open and closed', () => {
    const trigger = spectator.component.trigger;

    spyOn(trigger, 'openPanel');
    spyOn(trigger, 'closePanel');

    // Simulate opening the panel
    spectator.component.openOrClosePanel(new Event('click'), trigger);
    spectator.detectChanges();
    expect(trigger.openPanel).toHaveBeenCalled();

    // Simulate closing the panel
    spectator.component.openOrClosePanel(new Event('click'), trigger);
    spectator.detectChanges();
    expect(trigger.closePanel).toHaveBeenCalled();
  });
});
