import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import{provideAnimationsAsync} from '@angular/platform-browser/animations/async'

import { routes } from './app.routes';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideAnimationsAsync(),MessageService]
};
