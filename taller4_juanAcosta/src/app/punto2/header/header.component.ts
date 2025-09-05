import { Component } from '@angular/core';
import { BuscadorComponent } from './buscador/buscador.component';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [BuscadorComponent,LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
