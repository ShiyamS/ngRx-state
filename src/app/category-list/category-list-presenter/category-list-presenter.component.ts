import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Category, CategoryState } from '../../state/state';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-category-list-presenter',
  imports: [MatListModule, MatInputModule, MatButtonModule, FormsModule, MatCardModule, CommonModule, MatIconModule],
  templateUrl: './category-list-presenter.component.html',
  styleUrl: './category-list-presenter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListPresenterComponent {
  @Input() categories: Category[] | null = [];

  @Output() categoryAdded = new EventEmitter<string>();
  @Output() categoryDeleted = new EventEmitter<Category>();
  newCategoryName = ""


  addCategory() {
    this.categoryAdded.emit(this.newCategoryName);
    this.newCategoryName = "";
  }

  deleteCategory(category: Category) {
    this.categoryDeleted.emit(category);
  }


  trackByCategory(index: number, category: { name: string }): string {
    return category.name;
  }
}
