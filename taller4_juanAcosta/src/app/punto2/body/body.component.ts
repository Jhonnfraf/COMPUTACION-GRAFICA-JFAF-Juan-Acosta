import { Component } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'app-body',
  imports: [ContentComponent, SideBarComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
