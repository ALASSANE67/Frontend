import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';


import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { tokenInterceptorInterceptor } from './_service/token-interceptor.interceptor';

export const appConfig: ApplicationConfig = {
                 providers: [provideRouter(routes),
                  provideAnimationsAsync(),
                  provideHttpClient(withInterceptors([tokenInterceptorInterceptor])),

                ]

              }