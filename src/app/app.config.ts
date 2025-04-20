import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { categoryReducer } from './state/reducer';
import { provideHttpClient } from '@angular/common/http';
import { CategoryEffects } from './state/effects';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(), provideState('categories', categoryReducer), provideHttpClient(), provideEffects([CategoryEffects])],
};



