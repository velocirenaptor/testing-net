import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { sumX, sumY, sumXX, sumYY, sumXY } from "../common/calculate";

@Component({
  selector: "app-correlation",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./correlation.component.html",
  styleUrls: ["./correlation.component.css"],
})
export class CorrelationComponent {
  xInput: string = '';
  yInput: string = '';
  result: { r: number; rr: number } | null = null;

  calculateCorrelation(x: number[], y: number[]) {
    const n = x.length;
    const sumXVal = sumX(x);
    const sumYVal = sumY(y);
    const sumXXVal = sumXX(x);
    const sumYYVal = sumYY(y);
    const sumXYVal = sumXY(x, y);

    const numerator = n * sumXYVal - sumXVal * sumYVal;
    const denominator = Math.sqrt(
      (n * sumXXVal - sumXVal ** 2) * (n * sumYYVal - sumYVal ** 2)
    );

    const r = numerator / denominator;
    const rr = r ** 2;
    return { r, rr };
  }

  onSubmit(event: Event) {
    event.preventDefault();
  
    const xArray = this.xInput.split(',').map(num => parseFloat(num.trim()));
    const yArray = this.yInput.split(',').map(num => parseFloat(num.trim()));
  
    if (xArray.length === yArray.length) {
      this.result = this.calculateCorrelation(xArray, yArray);
    } else {
      alert("X and Y arrays must have the same length");
    }
  }
}