import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { Log, LogType } from '../state/state';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { Category } from '../../state/state';
@Component({
  selector: 'app-logs-presenter',
  imports: [MatListModule, CommonModule, FormsModule, MatToolbarModule, MatCardModule, MatChipsModule, MatIconModule, MatTableModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule],
  templateUrl: './logs-presenter.component.html',
  styleUrl: './logs-presenter.component.css'
})
export class LogsPresenterComponent implements OnInit {

  logForm!: NgForm;
  titleComp = 'Logs List';
  editFormLog = false;
  newLog: Log = {
    id: this.generateId(),
    title: '',
    date: Date.now().toString(),
    amount: 0,
    type: LogType.Spend,
    categoryId: 0
  };

  @Input() logsList: Log[] | null = [];
  @Input() idsOfCategory: Category[] | null = [];

  @Output() submitLog = new EventEmitter<Log>();
  @Output() deleteLog = new EventEmitter<string>();
  @Output() updateLog = new EventEmitter<Log>();

  displayedColumns: string[] = ['id', 'title', 'date', 'amount', 'type', 'categoryId', 'actions'];
  logTypes = [
    { value: LogType.Spend, label: 'Spend' },
    { value: LogType.Income, label: 'Income' }
  ];



  ngOnInit(): void {
    console.log('idsOfCategory', this.idsOfCategory);
  }



  onSubmit() {
    console.log('submit', this.newLog);
    this.submitLog.emit(this.newLog);
    this.resetForm()
    return;
  }

  resetForm() {

    this.newLog = {
      id: this.generateId(),
      title: '',
      date: Date.now().toString(),
      amount: 0,
      type: LogType.Spend,
      categoryId: 0
    };
  }

  deleteLogById(id: string) {
    console.log('delete in pres', id);
    this.deleteLog.emit(id);
  }

  generateId(): string {
    return String(Math.floor(100000 + Math.random() * 900000));
  }

  editALog(log: Log) {
    this.editFormLog = true;
    this.newLog = { ...log };
  }

  updateFormLog() {
    console.log('update>>>', this.newLog);
    this.updateLog.emit(this.newLog);
    this.editFormLog = false;
    this.resetForm();
  }
}
