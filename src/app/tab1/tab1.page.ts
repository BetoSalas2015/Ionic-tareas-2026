import { Component } from '@angular/core';
import { TareasService } from '../servicios/tareas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(public tareasService: TareasService) {}

}
