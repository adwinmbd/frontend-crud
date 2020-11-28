// import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/Todo.model';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todos: Todo[]=[];
  editing:boolean=false;
  editTodo={}

  title = 'Ng Todos';

  submitted = false;
  todoForm: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    // private router: Router,
    private apiService: ApiService
  ) { 
    this.mainForm();
    this.readTodos();
  }

  ngOnInit():void { }

  mainForm():void {
    this.todoForm = this.fb.group({
      id: [''],
      text: ['', [Validators.required]],
    })
  }

  // Getter to access form control
  get myForm(){
    return this.todoForm.controls;
  }

  onSubmit():void|boolean {
    this.submitted = true;
    if (!this.todoForm.valid) {
      return false;
    } else {
      if(this.editing===false){
        this.apiService.createTodo(this.todoForm.value).subscribe(
          (res:any) => {
            console.log('Todo successfully created!')
            this.todos = [...this.todos, res.todo];
            /*
            const info = res.todo;
            this.todos = this.todos.map((todo) =>
              todo.id === this.editTodo.id ? info : todo
            );
            */
           this.todoForm.setValue({
            text: "",
           })
          }, (error) => {
            console.log(error);
          });
      }else{
        console.log('not editing')

        /*
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateTodo(id, this.todoForm.value)
          .subscribe((res:any) => {
            const info = res.todo;
            this.todos = this.todos.map((todo) =>
              todo.id === this.editTodo.id ? info : todo
            );
            console.log('Employee updated successfully!')
          }, (error) => {
            console.log(error)
          })
        */
      }
    }
  }

  readTodos():void{
    this.apiService.getTodos().subscribe((res:any) => {
      this.todos = res.todos;
    })    
  }

  setEditMode(todo) {
    this.editing = true;
    this.editTodo = { ...todo };
    this.todoForm.setValue({
      id: todo.id,
      text: todo.text,
     });
  }

  removeTodo(todo:Todo):void {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteTodo(todo.id).subscribe((res) => {
            this.todos = this.todos.filter(t => t.id !== todo.id);
          }
        )    
    }
  }
}
