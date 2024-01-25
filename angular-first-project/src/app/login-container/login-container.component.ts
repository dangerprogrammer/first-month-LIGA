import { Component } from '@angular/core';

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss'
})

class LoginContainerComponent {
  loginTitle = 'Login';
};

export { LoginContainerComponent };