import { Component } from '@angular/core';

@Component({
  selector: 'app-slider2',
  standalone: true,
  imports: [],
  templateUrl: './slider2.component.html',
  styleUrl: './slider2.component.css'
})
export class Slider2Component {
  currentIndex = 0;
  images = [
    "../../assets/images/1/binnen_1.jpg",
    "../../assets/images/1/binnen_2.jpg",
    "../../assets/images/1/binnen_3.jpg",
    "../../assets/images/1/binnen_4.jpg",
    "../../assets/images/1/binnen_5.jpg",
    "../../assets/images/1/binnen_6.jpg",
    "../../assets/images/1/binnen_7.jpg",
    "../../assets/images/1/binnen_8.jpg",
    "../../assets/images/1/binnen_9.jpg",
    "../../assets/images/1/binnen_10.jpg",
    "../../assets/images/1/binnen_11.jpg",
    "../../assets/images/1/binnen_12.jpg",
    "../../assets/images/1/binnen_13.jpg",
    "../../assets/images/1/binnen_14.jpg",
    "../../assets/images/1/binnen_15.jpg",
    "../../assets/images/1/binnen_16.jpg",
    "../../assets/images/1/binnen_17.jpg"
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
