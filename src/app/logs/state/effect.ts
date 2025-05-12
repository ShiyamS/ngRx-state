import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryService } from '../../service/category.service';
import { logLoaded, logsSuccess, logAdd, logAddSuccess, deleteLog, deleteLogSuccess, logUpdate, logUpdateSuccess } from './action';
import { map, mergeMap, tap } from 'rxjs';

@Injectable()
export class LogsEffects {
  actions$ = inject(Actions);
  categoryService = inject(CategoryService);

  logListLoaded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logLoaded),
      mergeMap(() =>
        this.categoryService.getAllExpenses().pipe(
          tap((allLogs) => console.log('allLogs', allLogs)),
          map((allLogs) => logsSuccess({ payload: { logs: allLogs } }))
        )
      )
    )
  );

  addLogLoaded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logAdd),
      mergeMap(({ log }) =>
        this.categoryService.addAnExpense(log).pipe(
          tap((allLogs) => console.log('allLogs', allLogs)),
          map((allLogs) => logAddSuccess({ payload: { log: allLogs } }))
        )
      )
    )
  );


  deleteAlog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteLog),
      mergeMap(({ id }) =>
        this.categoryService.deleteExpense(id).pipe(
          map((log) => deleteLogSuccess({ payload: { id: log.id! } }))
        )
      )
    )
  )

  updateAlog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logUpdate),
      mergeMap(({ log }) =>
        this.categoryService.updateExpense(log).pipe(
          map((log) => logUpdateSuccess({ payload: { log: log } }))
        )
      )
    )
  )

}
