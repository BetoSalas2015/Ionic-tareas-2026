import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
    listas: Lista[] = [];

    constructor() {
      const lista1 = new Lista("Tareas Académicas");
      const lista2 = new Lista("Tareas personales");    

      this.listas.push(lista1, lista2);

      console.log(this.listas);
      
    }
}
