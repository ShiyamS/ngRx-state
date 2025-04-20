import { categories } from './selectors';
import { inject, Injectable } from "@angular/core";
import { CategoryService } from "../service/category.service";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";

import { categoriesError, categoriesSuccess, categoriesListLoaded, delectCategorySuccess, deleteCategory, addCategory, addCategorySuccess, addCategoryError, deleteCategoryError } from './action';
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { Action } from '@ngrx/store';
import { Category } from './state';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()

export class CategoryEffects {

  snackBar = inject(MatSnackBar);
  categoriesService = inject(CategoryService);
  actions$ = inject(Actions);

  categoriesListLoaded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoriesListLoaded),
      mergeMap(() => this.categoriesService.getCategories().pipe(
        map((allCategories) => categoriesSuccess({ categories: allCategories })),
        catchError(() => of(categoriesError()))
      ))
    )
  )

  categorieDelete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCategory),
      mergeMap((action) =>
        this.categoriesService.deleteCategory(action.category.id).pipe(
          map((category) => delectCategorySuccess({ payload: { category: action.category, message: 'Category deleted.' } })),
          catchError((error) => of(deleteCategoryError({ error: error })))
        )
      )
    )
  );


  addCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCategory),
      mergeMap((action) =>
        this.categoriesService.addCategory({ name: action.name }).pipe(
          map((category) => addCategorySuccess({ payload: { category: { id: category.id, name: category.name }, message: 'Category added.' } })),
          catchError((error) => of(addCategoryError({ error: error })))
        )
      )
    )
  );



  handleSnackbarSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCategorySuccess, delectCategorySuccess),
      tap((action) => {
        this.snackBar.open(`${action.payload.message}`, 'Close', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 2000,
        });
      })
    ), { dispatch: false }
  )


  handleSnackbarError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCategoryError, deleteCategoryError),
      tap((action) => {
        this.snackBar.open(`${action.error}`, 'Close', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 2000,
        });
      })
    ), { dispatch: false }
  )


}
