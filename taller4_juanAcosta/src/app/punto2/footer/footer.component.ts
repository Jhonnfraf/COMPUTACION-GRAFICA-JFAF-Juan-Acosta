import { Component } from '@angular/core';
import { Footer1Component } from './footer-1/footer-1.component';
import { Footer2Component } from './footer-2/footer-2.component';
import { Footer3Component } from './footer-3/footer-3.component';

@Component({
  selector: 'app-footer',
  imports: [Footer1Component, Footer2Component, Footer3Component],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
