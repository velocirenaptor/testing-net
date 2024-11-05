import { Component } from "@angular/core";
import { sumX, sumXX, sumY, sumXY } from "../common/calculate";

@Component({
  selector: "app-linear-regression",
  templateUrl: "./linear-regression.component.html",
})
export class LinearRegresionComponent {
  xInput: string = "";
  yInput: string = "";
  B0: number | null = null;
  B1: number | null = null;

  calcularlinearRegression(
    x: number[],
    y: number[],
  ): { B0: number; B1: number } {
    const n = x.length;
    const xSum = sumX(x);
    const ySum = sumY(y);
    const xySum = sumXY(x, y);
    const xSquareSum = sumXX(x);

    const xMean = xSum / n;
    const yMean = ySum / n;

    const B1 = (xySum - n * xMean * yMean) / (xSquareSum - n * xMean ** 2);
    const B0 = yMean - B1 * xMean;

    return { B0, B1 };
  }

  calculateRegression() {
    const x = this.xInput.split(',').map(Number);
    const y = this.yInput.split(',').map(Number);

    if (x.length === y.length && x.length > 1) {
      const result = this.calcularlinearRegression(x, y);
      this.B0 = result.B0;
      this.B1 = result.B1;
    } else {
      alert("Please enter an equal number of X and Y values.");
    }
  }
}
