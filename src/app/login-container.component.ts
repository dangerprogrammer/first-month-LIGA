import { Component } from '@angular/core';

@Component({
  selector: 'login-container',
  standalone: true,
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss'
})

class LoginContainerComponent {
  showPassword = false;
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
};

export { LoginContainerComponent };