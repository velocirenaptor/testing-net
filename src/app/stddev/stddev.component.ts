import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-stddev",
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: "./stddev.component.html",
  styleUrls: ["./stddev.component.css"],
})
export class StddevComponent implements OnInit {
  column1Input: string = '';
  column2Input: string = '';
  column1: number[] = [];
  column2: number[] = [];
  mediaColumn1: number = 0;
  mediaColumn2: number = 0;
  stddevColumn1: number = 0;
  stddevColumn2: number = 0;

  ngOnInit(): void {}

  updateColumns() {
    this.column1 = this.parseInput(this.column1Input);
    this.column2 = this.parseInput(this.column2Input);
  }

  parseInput(input: string): number[] {
    return input
      .split(',')
      .map((val) => parseFloat(val.trim()))
      .filter((num) => !isNaN(num));
  }

  calcularMedias() {
    if (this.column1.length > 0) {
      const sumaColumn1 = this.column1.reduce((acc, valor) => acc + valor, 0);
      this.mediaColumn1 = sumaColumn1 / this.column1.length;
    }
    if (this.column2.length > 0) {
      const sumaColumn2 = this.column2.reduce((acc, valor) => acc + valor, 0);
      this.mediaColumn2 = sumaColumn2 / this.column2.length;
    }
  }

  calcularStddev() {
    if (this.column1.length > 0) {
      const sumatoriaColumn1 = this.column1.reduce((acc, valor) => {
        const diff = valor - this.mediaColumn1;
        return acc + diff ** 2;
      }, 0);
      this.stddevColumn1 = this.closeNumber(
        Math.sqrt(sumatoriaColumn1 / (this.column1.length - 1)),
        2
      );
    }

    if (this.column2.length > 0) {
      const sumatoriaColumn2 = this.column2.reduce((acc, valor) => {
        const diff = valor - this.mediaColumn2;
        return acc + diff ** 2;
      }, 0);
      this.stddevColumn2 = this.closeNumber(
        Math.sqrt(sumatoriaColumn2 / (this.column2.length - 1)),
        2
      );
    }
  }

  closeNumber(num: number, decimales: number): number {
    const factor = Math.pow(10, decimales);
    return Math.round(num * factor) / factor;
  }
}
