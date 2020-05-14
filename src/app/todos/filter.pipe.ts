import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from './models/todo.model';
import { validFilters } from '../filter/filter.actions';

@Pipe({
  name: 'toDoFilter'
})
export class FilterPipe implements PipeTransform {

  transform(toDos: ToDo[], filter: validFilters): ToDo[] {

    switch (filter) {
      case 'completed':
        return toDos.filter(toDo => toDo.completed);
      case 'pending':
        return toDos.filter(toDo => !toDo.completed);
      case 'all':
        return toDos;
    }
  }

}
