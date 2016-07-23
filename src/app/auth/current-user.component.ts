import {Component, Input} from '@angular/core';
import {FirebaseAuthState} from 'angularfire2';

@Component({
  selector: 'app-current-user',
  template: `<div class="user-info" *ngIf="userInfo">Logged in as {{ userInfo.displayName }}</div>`
})
export class CurrentUserComponent {
  @Input() userInfo: FirebaseAuthState;
}