import { ToDo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { validFilters } from './filter/filter.actions';
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
  toDos: ToDo[];
  filter: validFilters;
}

export const appReducers: ActionReducerMap<AppState> = {

  toDos: todoReducer,
  filter: filterReducer

};

