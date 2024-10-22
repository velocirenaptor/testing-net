import { Component } from "@angular/core";
import { simpson, twoX, x2, oneOverX } from "../common/simpson_rule";

@Component({
  selector: "app-simpson",
  standalone: true,
  imports: [],
  templateUrl: "./simpson.component.html",
  styleUrls: ["./simpson.component.css"],
})
export class SimpsonComponent {
  calculateSimpsonRule(
    f: (x: number) => number,
    x0: number,
    x1: number,
    num_seg: number,
    error: number
  ) {
    const result = simpson(x0, x1, num_seg, f);
    return result;
  }
}
