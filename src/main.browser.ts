import {bootstrap} from '@angular/platform-browser-dynamic';
import { STORE_PROVIDERS, App } from './app';

// Angular 2
export function main() {
  return bootstrap(App, [
    STORE_PROVIDERS
  ]);
}


main();