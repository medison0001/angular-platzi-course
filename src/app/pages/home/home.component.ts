import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal([
    'Instalar Angular CLI',
    'Crear un nuevo proyecto',
    'Desarrollar la aplicación',
    'Probar la aplicación',
    'Desplegar la aplicación'
  ]);
}
