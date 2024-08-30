import {
  Component,
  DestroyRef, ElementRef,
  inject,
  OnInit, output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, map, Observable, startWith } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AppOption } from '../../models';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatOption,
} from '@angular/material/autocomplete';
import { MatFormField, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'lib-app-chooser',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocomplete,
    MatOption,
    MatSuffix,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatAutocompleteTrigger,
    MatIconButton,
    MatIcon,
    MatToolbar,
  ],
  templateUrl: './app-chooser.component.html',
  styleUrl: './app-chooser.component.scss',
})
export class AppChooserComponent implements OnInit {
  @ViewChild('inputAutoComplete') inputAutoComplete!: ElementRef<HTMLInputElement>;

  selectedAppOptionUrl = output<string>();
  protected filteredOptions!: Observable<Array<AppOption>>;
  protected optionControl = new FormControl<'' | AppOption>('');
  protected arrowIconSubject = new BehaviorSubject('arrow_drop_down');

  private readonly destroyRef = inject(DestroyRef);
  private readonly appOptions: Array<AppOption> = [
    { name: 'einkauf-verwalten', url: '/purchase-manager' },
    { name: 'todo', url: '/todo' },
  ];

  ngOnInit(): void {
    this.setFilteredOptions();
  }

  protected onOptionSelected(option: AppOption): void {
    this.selectedAppOptionUrl.emit(option.url)
  }

  protected displayFn(option: AppOption): string {
    return option && option.name ? option.name : '';
  }

  protected clearInput(evt: Event): void {
    evt.stopPropagation();
    this.optionControl?.reset();
    this.inputAutoComplete?.nativeElement.focus();
  }

  protected openOrClosePanel(evt: Event, trigger: MatAutocompleteTrigger): void {
    evt.stopPropagation();
    if (trigger.panelOpen) trigger.closePanel();
    else trigger.openPanel();
  }

  private setFilteredOptions(): void {
    this.filteredOptions = this.optionControl.valueChanges.pipe(
      startWith(''),
      takeUntilDestroyed(this.destroyRef),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this.filterAppOptionByName(name as string) : this.appOptions.slice();
      })
    );
  }

  private filterAppOptionByName(name: string): Array<AppOption> {
    const filterValue = name.toLowerCase();

    return this.appOptions.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }
}
