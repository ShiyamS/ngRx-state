import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { logs, selectIsLoadingList, selectIsLoadingAdd } from '../state/selectors';
import { LogsPresenterComponent } from '../logs-presenter/logs-presenter.component';
import { CommonModule } from '@angular/common';
import { logLoaded, logAdd, deleteLog, logUpdate } from '../state/action';
import { categoriesListLoaded } from '../../state/action';
import { map } from 'rxjs';
import { AppState, Category } from '../../state/state';
import { Log, LogsState } from '../state/state';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-logs-container',
  imports: [LogsPresenterComponent, CommonModule, MatProgressSpinnerModule],
  templateUrl: './logs-container.component.html',
  styleUrl: './logs-container.component.css'
})
export class LogsContainerComponent implements OnInit {
  store = inject(Store);
  logs$ = this.store.select(logs)
  categoryIds$ = this.store.select('categories')
    .pipe(
      map((state: AppState) => state.categories.list.map((category: Category) => category)) // Observable for category IDs
    );

  isLoadingList$ = this.store.select(selectIsLoadingList);
  isLoadingAdd$ = this.store.select(selectIsLoadingAdd);

  ngOnInit(): void {
    this.disptachStoreAction();
    // this.fetchCategories();
    // this.fetchLogs()
  }


  fetchLogs() {
    this.logs$.subscribe((logs) => {
      console.log('logs', logs);
    });
  }

  disptachStoreAction() {
    this.store.dispatch(logLoaded());
    this.store.dispatch(categoriesListLoaded());
  }

  onLogAdded(log: Log) {
    this.store.dispatch(logAdd({ log: log }));
  }

  onLogDeleted(id: string) {
    console.log('delete', id);
    this.store.dispatch(deleteLog({ id: id }));
  }
  onLogUpdated(log: Log) {
    console.log('update', log);
    this.store.dispatch(logUpdate({ log: log }));
  }

}
