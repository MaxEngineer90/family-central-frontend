import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'purchase-manager',
    loadComponent: () =>
      import('@family-central-frontend/purchase-manager').then(
        (m) => m.PurchaseManagerComponent
      ),
  },
];
