import { Component } from '@angular/core';
import { simpsonRuleIntegracion, linearFunction, quadraticFunction, tDistribucion, inverseFunction, tDist9, tDist10, tDist30 } from '../common/simpson_rule';

@Component({
  selector: 'app-simpson',
  standalone: true,
  imports: [],
  templateUrl: './simpson.component.html',
  styleUrl: './simpson.component.css'
})
export class SimpsonComponent {
  calculateSimpson(f: (x: number) => number, x0: number, x1: number, numSeg: number, error: number): number {
    return simpsonRuleIntegracion(f, x0, x1, numSeg, error);
  }

  getLinearFunction(x: number): number {
    return linearFunction(x);
  }

  getQuadraticFunction(x: number): number {
    return quadraticFunction(x);
  }

  getInverseFunction(x: number): number {
    return inverseFunction(x);
  }

  getTDistribucion(x: number, dof: number): number {
    return tDistribucion(x, dof);
  }

  getTDist9(x: number): number {
    return tDist9(x);
  }

  getTDist10(x: number): number {
    return tDist10(x);
  }

  getTDist30(x: number): number {
    return tDist30(x);
  }
   
}