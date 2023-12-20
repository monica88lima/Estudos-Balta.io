import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../models/todo.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Meus Estudos';
 constructor() {
  this.todos.push(new Todo(1,false,'Estudar Blazor'));
  this.todos.push(new Todo(2,false,'Estudar Boostrap'));
  this.todos.push(new Todo(3,false,'Estudar Angular'));
  this.todos.push(new Todo(4,true,'Estudar JavaScript'));

 }
  
  alteraTexto(){
    this.title = 'teste'
  }
  removeTarefa(todo: Todo){
    const index = this.todos.indexOf(todo);
    if(index != -1){
      this.todos.splice(index,1)

    }
   

  }
  mudaStatusTrue(todo: Todo){
  todo.done = true;

        
  }
  mudaStatusfalse(todo: Todo){
    todo.done = false;
  
          
    }
 
 }


