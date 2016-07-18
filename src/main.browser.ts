import {bootstrap} from '@angular/platform-browser-dynamic';
import {STORE_PROVIDERS, ROUTE_PROVIDERS, AppComponent} from './app';

import {instrumentStore} from '@ngrx/store-devtools';
import {useLogMonitor} from '@ngrx/store-log-monitor';

bootstrap(AppComponent, [
  STORE_PROVIDERS,
  ROUTE_PROVIDERS,

  // instrumentStore() sets up the @ngrx/store-devtools providers
  instrumentStore({
    monitor: useLogMonitor({
      position: 'right',
      visible: true
    })
  }),
]);
