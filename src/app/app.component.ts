import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { addCategory, categoryAction } from './state/action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'finance-logger';

  ngOnInit() {
    // console.log(addCategory({ category: { name: 'Food' } }));
    // console.log(categoryAction.addCategory({ category: { name: 'Game' } }));
    // console.log(categoryAction.addAnotherCategory({ category: { name: 'Books' } }));
    // console.log(categoryAction.deleteCategory({ category: { name: 'Books' } }));
  }



}
