import { createAction, createActionGroup, props } from "@ngrx/store";
import { Category } from "./state";



export const addCategory = createAction(
  '[Category List] Add Category',
  props<{ category: Category }>()
)


export const categoryAction = createActionGroup({
  source: 'Category List',
  events: {
    'Add Category': props<{ category: Category }>(),
    'Add Another Category': props<{ category: Category }>(),
    'Delete Category': props<{ category: Category }>(),
    'Update Category': props<{ category: Category }>(),
    'Delete All Categories': props<{ category: Category }>()
  }
})