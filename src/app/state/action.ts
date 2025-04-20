import { categories } from './selectors';
import { createAction, createActionGroup, props } from "@ngrx/store";
import { Category } from "./state";




export const categoryAction = createActionGroup({
  source: 'Category List',
  events: {
    'Add Category': props<{ category: Category }>(),
    'Add Another Category': props<{ category: Category }>(),
    'Delete Category Test': props<{ category: Category }>(),
    'Update Category': props<{ category: Category }>(),
    'Delete All Categories': props<{ category: Category }>()
  }
})

export const storeCategories = createAction(
  '[Category List] Store Categories',
  props<{ categories: Category[] }>()
)

// This action is dispatched when the categories are loaded from the server
// and the state is updated with the new categories.
export const categoriesListLoaded = createAction(
  '[Category List] Categories Loaded'
)

export const categoriesSuccess = createAction(
  '[Catergory List] Categories Success',
  props<{ categories: Category[] }>()
)

export const categoriesError = createAction(
  '[Catergory List] Categories Error'
)


// Delete Category
export const deleteCategory = createAction(
  '[Category List] Delete Category',
  props<{ category: Category }>()
)


export const delectCategorySuccess = createAction(
  '[Category List] Delete Category Success',
  props<{ payload: { category: Category, message?: string } }>()
)

export const deleteCategoryError = createAction(
  '[Category List] Delete Category Error',
  props<{ error: string }>()
)


// Add a category
export const addCategory = createAction(
  '[Category List] Add Category',
  props<{ name: string }>()
)

export const addCategorySuccess = createAction(
  '[Category List] Add Category Success',
  props<{ payload: { category: Category, message?: string } }>()
)

export const addCategoryError = createAction(
  '[Category List] Add Category Error',
  props<{ error: string }>()
)
