import { Component } from '@angular/core';
import { calculateMean } from '../common/media';
@Component({
  selector: 'app-media',
  standalone: true,
  imports: [],
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

    if (numbers.length > 0) {
      this.result = calculateMean(numbers);
    } else {
      this.result = null;
      alert('Enter a valid numbers');
    }
  }
}
