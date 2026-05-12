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
  name = 'Edison Monsalve';
  age = 30;
  disabled = true;
  img = 'https://angular.io/assets/images/logos/angular/angular.svg';

  person = {
    name: 'Edison Monsalve',
    age: 30,
    city: 'Medellín',
    avatar : 'https://w3schools.com/howto/img_avatar.png'
  }
}
