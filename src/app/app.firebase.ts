import {FIREBASE_PROVIDERS as _FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthMethods} from 'angularfire2';


export const FIREBASE_PROVIDERS = [
  _FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: 'AIzaSyBouCf6DgKiclwOdRyH2jlWncL9yIXJS9c',
   authDomain: 'angular-test-76b7a.firebaseapp.com',
    databaseURL: 'https://angular-test-76b7a.firebaseio.com',
    storageBucket: 'angular-test-76b7a.appspot.com'
  }),
  firebaseAuthConfig({
    method: AuthMethods.Popup
  })
];