import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  allCompleted = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll() {

    this.allCompleted = !this.allCompleted;
    this.store.dispatch(actions.toggleAll({ allCompleted: this.allCompleted }));

  }

}
