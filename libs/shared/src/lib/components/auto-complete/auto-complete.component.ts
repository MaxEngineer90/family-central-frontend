import {
  Component,
  ElementRef,
  input,
  OnInit,
  output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatOption,
} from '@angular/material/autocomplete';
import { BehaviorSubject, map, Observable, startWith } from 'rxjs';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { AppOption } from '../../../../../shared/src/lib/models';

@Component({
  selector: 'fcf-auto-complete',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocomplete,
    MatIconButton,
    MatIcon,
    MatSuffix,
    MatAutocompleteTrigger,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatOption,
    MatMiniFabButton,
  ],
  templateUrl: './auto-complete.component.html',
  styleUrl: './auto-complete.component.scss',
})
export class AutoCompleteComponent implements OnInit {
  @ViewChild('trigger') trigger!: MatAutocompleteTrigger;
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  //TODO: MOVE TO SHARED
  // RENAME Variabels
  appOptions = input.required<Array<AppOption>>();
  placeHolder = input.required<string>();
  selectedAppOptionUrl = output<string>();

  optionControl = new FormControl<AppOption | null>(null);
  filteredOptions!: Observable<AppOption[]>;
  arrowIconSubject = new BehaviorSubject<string>('arrow_drop_down');

  ngOnInit(): void {
    this.filteredOptions = this.optionControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name
          ? this.filterAppOptionByName(name)
          : this.appOptions().slice();
      })
    );
  }

  onOptionSelected(option: AppOption): void {
    this.selectedAppOptionUrl.emit(option.url);
  }

  displayFn(option: AppOption): string {
    return option && option.name ? option.name : '';
  }

  clearInput(evt: Event): void {
    evt.stopPropagation();
    this.optionControl.setValue(null);
    this.input.nativeElement.focus(); // Set focus on the input element
  }

  openOrClosePanel(evt: Event, trigger: MatAutocompleteTrigger): void {
    evt.stopPropagation();
    trigger.panelOpen ? trigger.closePanel() : trigger.openPanel();
  }

  private filterAppOptionByName(name: string): AppOption[] {
    const filterValue = name.toLowerCase();
    return this.appOptions().filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }
}
