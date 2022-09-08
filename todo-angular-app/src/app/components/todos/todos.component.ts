import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!:Todo[];
  // adding the "!" is a work around to typescripts strict class checking

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content:'First todo',
        completed: false
      },
      {
        content:'Second todo',
        completed: false
      }
    ]
  }

}
