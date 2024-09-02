import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppOption, AutoCompleteComponent } from '@family-central-frontend/ui';

@Component({
  selector: 'fcf-purchase-manager',
  standalone: true,
  imports: [CommonModule, AutoCompleteComponent],
  templateUrl: './purchase-manager.component.html',
  styleUrl: './purchase-manager.component.scss',
})
export class PurchaseManagerComponent {
  protected readonly appOptions: Array<AppOption> = [
    { name: '', url: '' },
    { name: '', url: '' },
  ];

  navigateToSelectedApp($event: string) {}
}
