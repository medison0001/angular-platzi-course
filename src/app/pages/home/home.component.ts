import { Component, computed, effect, inject, Injector, signal } from '@angular/core';

import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { Task } from '../../models/taks.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Instalar Angular CLI',
      completed: false
    },
    {
      id: Date.now() + 1,
      title: 'Crear un nuevo proyecto',
      completed: true
    },
    {
      id: Date.now() + 2,
      title: 'Desarrollar la aplicación',
      completed: false
    },
    {
      id: Date.now() + 3,
      title: 'Probar la aplicación',
      completed: false
    },
    {
      id: Date.now() + 4,
      title: 'Desplegar la aplicación',
      completed: true
    }
  ]);

  filter = signal<'all' | 'pending' | 'completed'>('all');
  tasksByFilter = computed(() => {
    const filter = this.filter();
    const tasks = this.tasks();
    switch (filter) {
      case 'pending':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  })

  newTaskCtrl = new FormControl('',{
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.pattern(/^(?!\s*$).+/) // Asegura que el valor no sea solo espacios en blanco
    ]
  });

  injector = inject(Injector);

  ngOnInit() {
    const storage = localStorage.getItem('tasks');
    if (storage) {
      const tasks = JSON.parse(storage);
      this.tasks.set(tasks);
    }
    this.trackTasks();
  }

  trackTasks(){
    effect(() => {
      const tasks = this.tasks();
      console.log(tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      
    }, { injector: this.injector });
  }

  changeHandler(){
    if(this.newTaskCtrl.valid){
      const value = this.newTaskCtrl.value.trim();
      if (value !== '') {
        this.addTask(value);
        this.newTaskCtrl.setValue('');
      }
    }
  }

  addTask(title: string){
    const newTask = { id: Date.now(), title, completed: false };
    this.tasks.update(tasks => [...tasks, newTask]);
  }

  deleteTask(index: number){
    this.tasks.update(tasks => tasks.filter((_, i) => i !== index));
  }

  updateTask(index: number){
    this.tasks.update(tasks => {
      return tasks.map(task => {
        if (tasks.indexOf(task) === index) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  }

  updateTaskEditingMode(index: number){
        this.tasks.update(tasks => {
      return tasks.map(task => {
        if (tasks.indexOf(task) === index) {
          return { ...task, editing: !task.editing };
        }
        return {...task, editing: false };
      });
    });
  }

    updateTaskText(index: number, event: Event){
        const input = event.target as HTMLInputElement;
        const newText = input.value.trim();
        if (newText) {
            this.tasks.update(tasks => {
                return tasks.map(task => {
                    if (tasks.indexOf(task) === index) {
                        return { ...task, title: newText, editing: false };
                    }
                    return task;
                });
            });
        }
  }

  changeFilter(filter: 'all' | 'pending' | 'completed'){
    this.filter.set(filter);
  }

}
