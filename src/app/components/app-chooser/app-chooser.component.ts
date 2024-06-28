import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, NgForOf } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, map, Observable, startWith } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AppOption } from '../../models/app-option';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-app-chooser',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    RouterLink,
    RouterLinkActive,
    NgForOf,
    MatInput,
    MatIcon,
    MatAutocomplete,
    AsyncPipe,
    ReactiveFormsModule,
    MatAutocompleteTrigger,
    MatIconButton,
  ],
  templateUrl: './app-chooser.component.html',
  styleUrl: './app-chooser.component.scss',
})
export class AppChooserComponent implements OnInit {
  @ViewChild('inputAutoComplete') inputAutoComplete: any;

  protected filteredOptions!: Observable<Array<AppOption>>;
  protected optionControl = new FormControl<'' | AppOption>('');
  protected arrowIconSubject = new BehaviorSubject('arrow_drop_down');
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  private readonly options: Array<AppOption> = [
    { name: 'einkauf-verwalten', url: '/purchase-manager' },
    { name: 'todo', url: '/todo' },
  ];

  ngOnInit(): void {
    this.setFilteredOptions();
  }

  private setFilteredOptions(): void {
    this.filteredOptions = this.optionControl.valueChanges.pipe(
      startWith(''),
      takeUntilDestroyed(this.destroyRef),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  protected onOptionSelected(option: AppOption): void {
    console.log(option.url);
    this.router.navigate([option.url]);
  }

  protected displayFn(option: AppOption): string {
    return option && option.name ? option.name : '';
  }

  protected clearInput(evt: any): void {
    evt.stopPropagation();
    this.optionControl?.reset();
    this.inputAutoComplete?.nativeElement.focus();
  }

  protected openOrClosePanel(evt: any, trigger: MatAutocompleteTrigger): void {
    evt.stopPropagation();
    if (trigger.panelOpen) trigger.closePanel();
    else trigger.openPanel();
  }

  private _filter(name: string): Array<AppOption> {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue),
    );
  }
}
