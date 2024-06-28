import { Routes } from '@angular/router';
import { PurchaseManagerComponent } from './components/purchase-manager/purchase-manager.component';
import { TodoComponent } from './components/todo/todo.component';

export const routes: Routes = [
  { path: 'purchase-manager', component: PurchaseManagerComponent },
  { path: 'todo', component: TodoComponent },
];
