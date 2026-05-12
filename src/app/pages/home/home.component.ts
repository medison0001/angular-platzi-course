import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from '../../models/taks.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
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
      completed: false
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
      completed: false
    }
  ]);

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
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
}
