import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-punto2',
  imports: [HeaderComponent,BodyComponent,FooterComponent],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component {

}
