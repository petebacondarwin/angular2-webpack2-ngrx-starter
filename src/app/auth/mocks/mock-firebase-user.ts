export class MockFirebaseUser implements firebase.User {
  displayName: string;
  email: string;
  photoURL: string;
  providerId: string;
  uid: string;

  delete(): firebase.Promise<void> { return null; }
  emailVerified: boolean;
  getToken(opt_forceRefresh?: boolean): firebase.Promise<string>  { return null; }
  isAnonymous: boolean;
  link(credential: firebase.auth.AuthCredential): firebase.Promise<firebase.User>  { return null; }
  linkWithPopup(provider: firebase.auth.AuthProvider): firebase.Promise<{ credential: firebase.auth.AuthCredential, user: firebase.User }>  { return null; }
  linkWithRedirect(provider: firebase.auth.AuthProvider): firebase.Promise<void>  { return null; }
  providerData: (firebase.UserInfo)[];
  reauthenticate(credential: firebase.auth.AuthCredential): firebase.Promise<void>  { return null; }
  refreshToken: string;
  reload(): firebase.Promise<void>  { return null; }
  sendEmailVerification(): firebase.Promise<void>  { return null; }
  unlink(providerId: string): firebase.Promise<firebase.User>  { return null; }
  updateEmail(newEmail: string): firebase.Promise<void>  { return null; }
  updatePassword(newPassword: string): firebase.Promise<void>  { return null; }
  updateProfile(profile: { displayName: string, photoURL: string }): firebase.Promise<void>  { return null; }
}