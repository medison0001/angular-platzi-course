import { Component, signal } from '@angular/core';
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
  tasks = signal([
    'Instalar Angular CLI',
    'Crear un nuevo proyecto',
    'Desarrollar la aplicación',
    'Probar la aplicación',
    'Desplegar la aplicación'
  ]);
  name = signal('Edison Monsalve');
  age = 30;
  disabled = true;
  img = 'https://angular.io/assets/images/logos/angular/angular.svg';

  person = signal({
    name: 'edison',
    age: 30,
    city: 'Medellín',
    avatar : 'https://w3schools.com/howto/img_avatar.png'
  });

  clickHander(){
    alert('Hola Mundo');
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
    console.log(newValue);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  changeAge(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = Number(input.value);
    this.person.update(person => ({ ...person, age: newValue }));
    console.log(newValue);
  }

    changeName(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(person => ({ ...person, name: newValue }));
    console.log(newValue);
  }
}
