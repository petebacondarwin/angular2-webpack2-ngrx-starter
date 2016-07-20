import {FIREBASE_PROVIDERS as _FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthMethods} from 'angularfire2';


export const FIREBASE_PROVIDERS = [
  _FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: 'AIzaSyA3TNmdr2wH8zjkyRqEP8hMT6BmTHCI8y8',
    authDomain: 'bacondarwin-com-api-project-1048874335914.firebaseapp.com',
    databaseURL: 'https://bacondarwin-com-api-project-1048874335914.firebaseio.com',
    storageBucket: ''
  }),
  firebaseAuthConfig({
    method: AuthMethods.Popup
  })
];