import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../models/todo.models';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public todos: Todo[] = [];
  public form: FormGroup;
  public mode ='list';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required])]
    });
    this.carregar();

  }

  adicionarTarefa() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, false, title.charAt(0).toUpperCase() + title.slice(1)));
    this.salvar();
    this.limparTarefa();
  }

  
  limparTarefa() {
    this.form.reset();
  }


  removeTarefa(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index != -1) {
      this.todos.splice(index, 1)

    }
    this.salvar();


  }
  mudaStatusTrue(todo: Todo) {
    todo.done = true;
    this.salvar();


  }
  mudaStatusfalse(todo: Todo) {
    todo.done = false;
    this.salvar();


  }

  salvar() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data)
    this.mode = 'list';
  }

  carregar() {
    const data = localStorage.getItem('todos');
    if (data)
      this.todos = JSON.parse(data);
  }

  trocarModo(mode: string){
    this.mode = mode;
  }
}


