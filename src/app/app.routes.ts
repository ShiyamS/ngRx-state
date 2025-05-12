import { Routes } from '@angular/router';
import { CategoryListContainerComponent } from './category-list/category-list-container/category-list-container.component';
import { LogsContainerComponent } from './logs/logs-container/logs-container.component';

export const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoryListContainerComponent },
  { path: 'logs', component: LogsContainerComponent },
];
