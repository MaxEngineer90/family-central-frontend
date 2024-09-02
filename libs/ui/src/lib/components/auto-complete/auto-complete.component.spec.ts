import { AutoCompleteComponent } from './auto-complete.component';
import { MockModule } from 'ng-mocks';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AppOption } from '@family-central-frontend/ui';
import { By } from '@angular/platform-browser';

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
    detectChanges: true,
  });

  beforeEach(() => {
    spectator = createComponent({
      props: { placeHolder: 'Hello World', appOptions: appOptions },
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

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

  xit('should clear input value and focus on the input', () => {
    spectator.component.ngOnInit();
    spectator.detectChanges();

    // Finde das input-Element durch die Template-Referenzvariable
    const inputElement = spectator.query('input');
    expect(inputElement).toBeTruthy();

    // Spy on the focus method of the input element using jest.spyOn
    const focusSpy = jest.spyOn(
      spectator.debugElement.query(By.css('input')).nativeElement,
      'focus'
    );

    // Simuliere den Klick auf den Clear-Button
    const clearButton = spectator.query('.btn-clear-input');

    console.log(clearButton);

    spectator.click(clearButton!);
    spectator.detectChanges();

    // Überprüfe, ob der Input-Wert gelöscht wurde
    expect(spectator.component.optionControl.value).toBeNull();

    // Überprüfe, ob die focus-Methode aufgerufen wurde
    expect(focusSpy).toHaveBeenCalled();
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
