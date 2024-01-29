import { Component } from '@angular/core';
import { InputsContainerComponent } from './inputs-container/inputs-container.component';

@Component({
  selector: 'login-container',
  standalone: true,
  imports: [InputsContainerComponent],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss'
})

class LoginContainerComponent {
};

export { LoginContainerComponent };