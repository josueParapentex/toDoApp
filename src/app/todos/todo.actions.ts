import { createAction, props } from '@ngrx/store';

export const createToDo = createAction(
  '[TODO] Create To Do',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle To Do',
  props<{ id: number }>()
);

export const editToDo = createAction(
  '[TODO] Edit To Do',
  props<{ id: number, text: string }>()
);

export const deleteToDo = createAction(
  '[TODO] Delete To Do',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] Toggle All',
  props<{ allCompleted: boolean }>()
);

export const deleteCompletedToDos = createAction('[TODO] Delete Completed To Dos');
