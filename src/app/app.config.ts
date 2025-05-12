import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { categoryReducer } from './state/reducer';
import { provideHttpClient } from '@angular/common/http';
import { CategoryEffects } from './state/effects';
import { LogsEffects } from './logs/state/effect';
import { logsReducer } from './logs/state/reducer';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(), provideState('categories', categoryReducer), provideHttpClient(), provideEffects([CategoryEffects]), provideState('logs', logsReducer), provideEffects([LogsEffects])],
};



