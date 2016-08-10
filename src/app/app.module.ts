import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';
import { appRoutes } from './app.routes';
import { AuthModule } from './auth';
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';
import { STORE_PROVIDERS } from './app.store';
import { FIREBASE_PROVIDERS } from './app.firebase';
import { CounterComponent } from './counter';

import {instrumentStore} from '@ngrx/store-devtools';
import {useLogMonitor} from '@ngrx/store-log-monitor';


@NgModule({
    declarations: [
      AppComponent,
      StoreLogMonitorComponent,
      CounterComponent
    ],
    imports:      [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      AuthModule
    ],
    providers: [
      STORE_PROVIDERS,
      FIREBASE_PROVIDERS,
      // instrumentStore() sets up the @ngrx/store-devtools providers
      instrumentStore({
        monitor: useLogMonitor({
          position: 'right',
          visible: true
        })
      })
    ],
    bootstrap:    [AppComponent],
})
export class AppModule {}
