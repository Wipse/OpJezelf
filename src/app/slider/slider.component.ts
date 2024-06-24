import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  currentIndex = 0;
  images = [
    "../../assets/images/1/buiten_1.jpg",
    "../../assets/images/1/buiten_2.jpg",
    "../../assets/images/1/buiten_3.jpg"
  ];

  get transformStyle() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }
}