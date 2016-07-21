import { Observable } from 'rxjs/Observable';
import { AuthProviders, FirebaseAuthState } from 'angularfire2';
import { AuthBackend, EmailPasswordCredentials } from 'angularfire2/providers/auth_backend';

export class MockAuthBackend extends AuthBackend {
    authState$: Observable<FirebaseAuthState>;

    authWithCustomToken(token: string): Promise<FirebaseAuthState> {
      throw new Error('not implemented');
    }

    authAnonymously(options?: any): Promise<FirebaseAuthState> {
      throw new Error('not implemented');
    }

    authWithPassword(credentials: EmailPasswordCredentials): Promise<FirebaseAuthState> {
      throw new Error('not implemented');
    }

    authWithOAuthPopup(provider: AuthProviders, options?: any): Promise<firebase.auth.UserCredential> {
      throw new Error('not implemented');
    }

    authWithOAuthRedirect(provider: AuthProviders, options?: any): Promise<void> {
      throw new Error('not implemented');
    }

    authWithOAuthToken(credentialsObj: firebase.auth.AuthCredential, options?: any): Promise<FirebaseAuthState> {
      throw new Error('not implemented');
    }

    onAuth(): Observable<FirebaseAuthState> {
      return this.authState$;
    }

    getAuth(): FirebaseAuthState {
      return null;
    }

    unauth(): void {
      this.authState$ = null;
    }

    createUser(credentials: EmailPasswordCredentials): Promise<FirebaseAuthState> {
      throw new Error('not implemented');
    }

    getRedirectResult(): Observable<firebase.auth.UserCredential> {
      throw new Error('not implemented');
    }


}