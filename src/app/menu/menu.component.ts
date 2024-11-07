import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MediaComponent } from '../media/media.component';
import { StddevComponent } from '../stddev/stddev.component';
import { LinearRegresionComponent } from '../linear-regression/linear-regression.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    LinearRegresionComponent,
    MediaComponent,
    StddevComponent,
    RouterLink,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
