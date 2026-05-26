import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
  welcome = 'Biendvenido a mi primera aplicación con Angular';
  tasks = [
    'Instalar Angular CLI',
    'Crear un nuevo proyecto',
    'Desarrollar la aplicación',
    'Probar la aplicación',
    'Desplegar la aplicación'
  ];
}
