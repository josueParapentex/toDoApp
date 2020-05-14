import { createReducer, on } from '@ngrx/store';
import * as actions from './filter.actions';

export const initialState: actions.validFilters = 'all';

// tslint:disable-next-line: variable-name
const _filterReducer = createReducer(initialState,
  on(actions.setFilter, (state, { filter }) => filter)
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
