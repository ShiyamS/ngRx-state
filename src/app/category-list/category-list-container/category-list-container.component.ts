import { categories } from './../../state/selectors';
import { Component, inject, OnInit } from '@angular/core';
import { CategoryListPresenterComponent } from '../category-list-presenter/category-list-presenter.component';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Category, initialState } from '../../state/state';
import { addCategory, categoryAction, categoriesListLoaded, deleteCategory } from '../../state/action';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-category-list-container',
  imports: [CategoryListPresenterComponent, CommonModule],
  templateUrl: './category-list-container.component.html',
  styleUrl: './category-list-container.component.css'
})
export class CategoryListContainerComponent implements OnInit {
  store = inject(Store)
  CategoryService = inject(CategoryService);
  categories$ = this.store.select(categories);

  ngOnInit() {

    this.categories$.subscribe((categories) => {
      console.log('catg', categories);
    });


    // This causes side effects
    // this.CategoryService.getCategories().subscribe((categories) => {
    //   console.log('catg', categories);
    //   this.store.dispatch(storeCategories({ categories: categories }));
    // })
    // console.log('catg', this.categories$);

    // Proper way to load categories
    this.store.dispatch(categoriesListLoaded());
  }

  addCategory(category: string) {
    const categoryId = this.CategoryService.newCategoryId

    console.log('categoryId', categoryId)

    this.store.dispatch(addCategory({ name: category }));
  }

  deleteCategory(category: Category) {
    this.store.dispatch(deleteCategory({ category: category }));
    // categoryAction.deleteCategory({ category: category }));
  }

}
