import { Component, OnInit ,EventEmitter , Output} from '@angular/core';

import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  text: string='';
  @Output() AddTodoEvent =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
    const todo ={
      id:uuidv4(),
      text:this.text,
      complited:false,
    }
    this.AddTodoEvent.emit(todo)
    this.text=""
  };

}
