import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ToDo } from '../models/todo.model';
import * as actions from '../todo.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() toDo: ToDo;
  @ViewChild('txtInputChild') txtInputChild: ElementRef;

  editing: boolean;

  chkCompleted: FormControl;
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {

    this.chkCompleted = new FormControl(this.toDo.completed);
    this.txtInput = new FormControl(this.toDo.text, Validators.required);

    this.chkCompleted.valueChanges.subscribe(value => {
      this.store.dispatch(actions.toggle({ id: this.toDo.id }));
    });
  }

  edit() {
    this.editing = true;
    setTimeout(() => this.txtInputChild.nativeElement.focus(), 1);
  }

  finishEdit() {
    this.editing = false;
    this.txtInput.setValue(this.toDo.text);

    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.toDo.text) {
      return;
    }

    this.store.dispatch(
      actions.editToDo({
        id: this.toDo.id,
        text: this.txtInput.value
      })
    );
  }

  deleteToDo() {

    this.store.dispatch(
      actions.deleteToDo({
        id: this.toDo.id
      })
    );

  }

}
