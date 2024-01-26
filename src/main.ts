import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LoginContainerComponent } from './app/login-container.component';

bootstrapApplication(LoginContainerComponent, appConfig)
  .catch((err) => console.error(err));
