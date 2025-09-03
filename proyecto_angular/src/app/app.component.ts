import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { MiComponentePersona } from './personas/personas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MiComponenteComponent, MiComponentePersona],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto_angular';
}
