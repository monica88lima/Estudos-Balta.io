import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, AboutComponent]
})
export class AppComponent {
  title = 'AngularEstudo';
  subtitle = "Monica Estudo";
}
