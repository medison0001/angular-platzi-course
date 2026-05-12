import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Biendvenido a mi primera aplicación con Angular';
  tasks = [
    'Instalar Angular CLI',
    'Crear un nuevo proyecto',
    'Desarrollar la aplicación',
    'Probar la aplicación',
    'Desplegar la aplicación'
  ];
}
