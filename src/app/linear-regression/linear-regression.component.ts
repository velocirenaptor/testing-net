import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { sumX, sumXX, sumY, sumXY } from "../common/calculate";
import { linearRegression } from "../common/linear-regression";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-linear-regression",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./linear-regression.component.html",
})
export class LinearRegresionComponent {
  xValues: string = "";
  yValues: string = "";
  result: { slope: number; intercept: number } = { slope: 0, intercept: 0 };

  calcularlinearRegression(
    x: number[],
    y: number[],
  ): { slope: number; intercept: number } {
    const n = x.length;
    const xSum = sumX(x);
    const ySum = sumY(y);
    const xySum = sumXY(x, y);
    const xSquareSum = sumXX(x);

    const xMean = xSum / n;
    const yMean = ySum / n;

    const slope = (xySum - n * xMean * yMean) / (xSquareSum - n * xMean ** 2);
    const intercept = yMean - slope * xMean;

    return { slope, intercept };
  }

  predict(slope: number, intercept: number, x: number) {
    return intercept + slope * x; 
  }

  linearRegression() {
    const xArr = this.xValues.split(',').map(val => parseFloat(val.trim()));
    const yArr = this.yValues.split(',').map(val => parseFloat(val.trim()));

    if (xArr.length !== yArr.length) {
      alert('The number of x values must match the number of y values.');
      return;
    }

    this.result = this.calcularlinearRegression(xArr, yArr);
    console.log(this.result);
  }
}
