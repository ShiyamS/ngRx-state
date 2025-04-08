import { categories } from './../../state/selectors';
import { Component, inject, OnInit } from '@angular/core';
import { CategoryListPresenterComponent } from '../category-list-presenter/category-list-presenter.component';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Category, initialState } from '../../state/state';
import { addCategory, categoryAction } from '../../state/action';


@Component({
  selector: 'app-category-list-container',
  imports: [CategoryListPresenterComponent, CommonModule],
  templateUrl: './category-list-container.component.html',
  styleUrl: './category-list-container.component.css'
})
export class CategoryListContainerComponent implements OnInit {
  store = inject(Store)
  categories$ = this.store.select(categories);

  ngOnInit() {

    this.categories$.subscribe((categories) => {
      console.log('catg', categories);
    });
    // console.log('catg', this.categories$);
  }

  addCategory(category: Category) {
    this.store.dispatch(categoryAction.addCategory({ category: category }));
  }

  deleteCategory(category: Category) {
    this.store.dispatch(categoryAction.deleteCategory({ category: category }));
  }

}
