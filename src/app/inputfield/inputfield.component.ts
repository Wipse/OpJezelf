import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inputfield',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.css']
})
export class InputfieldComponent {
  form = new FormGroup({
    name: new FormControl()
});
correctAnswer = 1300;
isCloseEnough = false;
showVibration = false;
isHigher = false;
isLower = false;

getInputData1() {
  let name = this.form.get('name')?.value;
  const userValue = parseFloat(name);

  if (this.isWithinTenPercent(userValue, this.correctAnswer)) {
    this.isCloseEnough = true;
    this.showVibration = false;  // Ensure vibration is not shown
    this.isHigher = false;
    this.isLower = false;
  } else {
    this.isCloseEnough = false;
    this.showVibration = true;  // Trigger vibration
    
    if (userValue < this.correctAnswer) {
      this.isLower = false;
      this.isHigher = true;
    }
    
    if (userValue > this.correctAnswer) {
      this.isLower = true;
      this.isHigher = false;
    }

    // Reset form and remove vibration class after animation ends
    setTimeout(() => {
      this.form.reset();
      this.showVibration = false;
    }, 300);  // Duration of the vibrate animation
  }

  console.log('antwoord: ', name);
}

isWithinTenPercent(userValue: number, correctAnswer: number): boolean {
  const lowerBound = correctAnswer * 0.9;
  const upperBound = correctAnswer * 1.1;
  return userValue >= lowerBound && userValue <= upperBound;
}
}
