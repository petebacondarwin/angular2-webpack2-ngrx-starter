import {provideRouter} from '@angular/router';
import {CounterComponent} from './counter';

const appRoutes = [
  { path: '', component: CounterComponent}
];

export const ROUTE_PROVIDERS = [
  provideRouter(appRoutes)
];