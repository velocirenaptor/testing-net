import { Component } from '@angular/core';
import { calculateMean } from '../common/media';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {
  numbersInput: string = '';
  result: number | null = null;

  calculateMean() {
    const numbers = this.numbersInput
    .split(',')
    .map(num => parseFloat(num.trim()))
    .filter(num => !isNaN(num));

    this.result = numbers.length ? numbers.reduce((a, b) => a + b, 0) / numbers.length : null;
  }
}
