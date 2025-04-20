
import { Action, createReducer, on } from "@ngrx/store"
import { AppState, initialState, Category } from "./state";

import * as actions from './action';


// Old approach:
// export function reducer(state: AppState, action: Action): AppState {
//   switch (action.type) {
//     case '[Category List] Add Category':
//       return { ...state, categories: [...state.categories, action.payload] };
//     default:
//       return state;
//   }
// }

// New approach:

const _reducter = createReducer(initialState,
  on(actions.addCategorySuccess, (state, { payload }) => ({
    ...state.categories, categories: { ...state.categories.list, list: [...state.categories.list, payload.category] }
  })),
  // delete a categorey
  on(actions.categoryAction.deleteCategoryTest, (state, { category }) => ({
    ...state.categories, categories: { ...state.categories.list, list: state.categories.list.filter(aCategory => aCategory.id !== category.id) }
  })),
  /// delete all categories
  on(actions.categoryAction.deleteAllCategories, (state) => ({
    ...state.categories, categories: { ...state.categories.list, list: [] }
  })),

  on(actions.storeCategories, (state, { categories }) => ({
    ...state, categories: { ...state.categories.list, list: categories }
  })),

  on(actions.categoriesSuccess, (state, { categories }) => ({
    ...state, categories: { list: categories }
  })),
  on(actions.delectCategorySuccess, (state, { payload }) => ({
    ...state, categories: { ...state.categories.list, list: state.categories.list.filter(aCategory => aCategory.id !== payload.category.id) }
  }))
);


export function categoryReducer(state: AppState, action: Action) {
  return _reducter(state, action);
}
