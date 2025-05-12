// import { categories } from './selectors';
import { AppState, CategoryState } from './state';
import { createSelector, createFeatureSelector } from '@ngrx/store'


export const categories = (state: { categories: AppState }) => {
  return state.categories.categories.list;
};


// export const selectCategoryState = createFeatureSelector<AppState, { categories: CategoryState }>('categories');

// // Adjust the selector to access the nested 'categories.list'
// export const categories = createSelector(
//   selectCategoryState,
//   (state) => state.categories.list
// );A
