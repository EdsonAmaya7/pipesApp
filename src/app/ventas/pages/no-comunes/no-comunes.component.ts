import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = "Susana";
  genero: string = "femenino";

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  cambiarPersona() {
    if (this.nombre == 'Susana') {
      this.nombre = 'Fernendo';
      this.genero = 'masculino'
      return;
    }
    this.nombre = 'Susana';
    this.genero = 'femenino'
  }


  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Jose', 'mario', 'fernando'];
  clientesMapa = {
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': 'Tenemos un cliente esperando.',
    'other': 'Tenemos # clientes esperando'
  }

  borrarPersona() {
    this.clientes.pop();
  }

  // keyvalue pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'ottawa, Canadá'
  }

  // jsonPipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'robin',
      vuela: false
    },
    {
      nombre: 'aquaman',
      vuela: false
    }
  ]

  // async pipe
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
    
  });
}
