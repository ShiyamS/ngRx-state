
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
  on(actions.categoryAction.addCategory, (state, { category }) => ({
    ...state.categories, categories: { ...state.categories.list, list: [...state.categories.list, category] }
  })),
  // delete a categorey
  on(actions.categoryAction.deleteCategory, (state, { category }) => ({
    ...state.categories, categories: { ...state.categories.list, list: state.categories.list.filter(aCategory => aCategory.name !== category.name) }
  })),
  /// delete all categories
  on(actions.categoryAction.deleteAllCategories, (state) => ({
    ...state.categories, categories: { ...state.categories.list, list: [] }
  }))
);


export function categoryReducer(state: AppState, action: Action) {
  return _reducter(state, action);
}
