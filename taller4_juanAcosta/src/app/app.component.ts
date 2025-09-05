import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Punto1Component } from './punto1/punto1.component';
import { Punto2Component } from './punto2/punto2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Punto1Component,Punto2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taller4_juanAcosta';
}
