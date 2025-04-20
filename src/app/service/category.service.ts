import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Category } from '../state/state';

import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly baseUrl = "http://localhost:3000/categories";

  constructor(private readonly http: HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>(this.baseUrl);
  }

  getCategoryById(id: number) {
    return this.http.get<Category>(`${this.baseUrl}/${id}`);
  }

  addCategory(categoryName: { name: string }) {
    return this.http.post<Category>(this.baseUrl, categoryName);
  }

  deleteCategory(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  newCategoryId = uuidv4();

}
