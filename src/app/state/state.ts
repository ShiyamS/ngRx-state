export interface Category {
  id: number;
  name: string;

}
export interface CategoryState {
  list: Category[];
}

export interface AppState {
  categories: CategoryState;
}


export const initialState: AppState = {
  categories: { list: [] }
}