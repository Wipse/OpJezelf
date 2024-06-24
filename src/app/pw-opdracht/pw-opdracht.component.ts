import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { InputfieldComponent} from '../inputfield/inputfield.component';
import { Slider2Component } from '../slider2/slider2.component';

@Component({
  selector: 'app-pw-opdracht',
  standalone: true,
  imports: [SliderComponent, InputfieldComponent, Slider2Component],
  templateUrl: './pw-opdracht.component.html',
  styleUrl: './pw-opdracht.component.css'
})
export class PWOpdrachtComponent {

}
