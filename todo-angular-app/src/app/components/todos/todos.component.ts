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

  inputTodo: string = "";

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

  // this method will strike-through a todo when completed
  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i = id) v.completed= !v.completed;

      return v;
    } )
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id); 
  }

}
