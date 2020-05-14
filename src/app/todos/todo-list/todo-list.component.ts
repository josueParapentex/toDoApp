import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';
import { ToDo } from '../models/todo.model';
import { validFilters } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  toDos: ToDo[] = [];
  currentFilter: validFilters;

  constructor(private store: Store<AppState>) {

    this.store.subscribe(state => {

      this.toDos = state.toDos;
      this.currentFilter = state.filter;

    });
  }

  ngOnInit(): void {
  }

}
