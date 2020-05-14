import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { ToDo } from './models/todo.model';

export const initialState: ToDo[] = [
  new ToDo('Ser el amo del universo'),
  new ToDo('Hacer curso'),
  new ToDo('Llamar a Fabio'),
  new ToDo('Rehacer estilos'),
];

// tslint:disable-next-line: variable-name
const _todoReducer = createReducer(
  initialState,
  on(actions.createToDo, (state, { text }) => [...state, new ToDo(text)]),
  on(actions.toggle, (state, { id }) => {

    return state.map(toDo => {

      if (toDo.id === id) {

        return {
          ...toDo,
          completed: !toDo.completed
        };

      } else { return toDo; }

    });

  }),
  on(actions.editToDo, (state, { id, text }) => {

    return state.map(toDo => {

      if (toDo.id === id) {

        return {
          ...toDo,
          // tslint:disable-next-line: object-literal-shorthand
          text: text
        };

      } else { return toDo; }

    });

  }),
  on(actions.deleteToDo, (state, { id }) => state.filter(toDo => toDo.id !== id)),
  on(actions.toggleAll, (state, { allCompleted }) => {

    return state.map( toDo => {
      return {
        ...toDo,
        completed: allCompleted
      };
    });

  } ),
  on(actions.deleteCompletedToDos, state => state.filter( toDo => !toDo.completed))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
