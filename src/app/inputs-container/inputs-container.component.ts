import { Component } from '@angular/core';

@Component({
  selector: 'inputs-container',
  standalone: true,
  templateUrl: './inputs-container.component.html',
  styleUrl: './inputs-container.component.scss'
})

class InputsContainerComponent {
  showPassword = false;
  
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}

export { InputsContainerComponent };