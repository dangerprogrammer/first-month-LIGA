import { bootstrapApplication } from '@angular/platform-browser';
import { LoginContainerComponent } from './app/login-container.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(LoginContainerComponent, config);

export default bootstrap;
