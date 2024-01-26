import { Component } from '@angular/core';
import { LoginContainerComponent } from './login-container/login-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-first-project';
}
