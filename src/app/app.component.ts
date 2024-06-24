import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RouterModule, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'opjezelf';
}
