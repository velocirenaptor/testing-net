import { Component } from '@angular/core';
import { Simpson } from '../common/simpson_rule';

@Component({
  selector: 'app-simpson',
  standalone: true,
  imports: [],
  templateUrl: './simpson.component.html',
  styleUrl: './simpson.component.css'
})
export class SimpsonComponent {

  simp: Simpson;

  constructor(){
    this.simp = new Simpson();
  }

  getArea(fx: any, x0: number, x1: number, seg: number, error: number) {
    return this.simp.area(fx, x0, x1, seg, error);
  }
}