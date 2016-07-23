import {MockFirebaseUser} from './mock-firebase-user';

export function createMockAuthState(uid, email, displayName, provider) {
  return {
    uid,
    provider,
    auth: createUser(uid, email, displayName),
    displayName: displayName,
    email: email,
    photoURL: `http://my.photo.com/${email}.jpg`,
    providerId: 'some.provider'
  };
}

function createUser(uid, email, displayName) {
  let user = new MockFirebaseUser();
  user.displayName = displayName;
  user.email = email;
  user.uid = uid;
  user.photoURL = `http://my.photo.com/${email}.jpg`;
  user.providerId = 'some.provider';
  return user;
}