import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as filterActions from 'src/app/filter/filter.actions';
import * as toDoActions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: filterActions.validFilters = 'all';
  allFilters: filterActions.validFilters[] = ['all', 'completed', 'pending'];

  pendingTasks: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.subscribe(state => {

      this.currentFilter = state.filter;
      this.pendingTasks = state.toDos.filter(toDo => !toDo.completed).length;

    });

  }

  selectFilter(filter: filterActions.validFilters) {
    this.store.dispatch(filterActions.setFilter({ filter }));
  }

  deleteCompletedToDos() {
    this.store.dispatch(toDoActions.deleteCompletedToDos());
  }

}
