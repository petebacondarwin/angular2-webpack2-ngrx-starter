import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthConfiguration } from './auth.store';

@Component({
  selector: 'app-login-buttons',
  template: `
  <div *ngIf="isLoggedIn">
    <button (click)="logout.next()">Logout</button>
  </div>
  <div *ngIf="!isLoggedIn">
    <button *ngFor="let provider of authProviderConfigs" (click)="login.next(provider)">Log in via {{provider.name}}</button>
  </div>
`
})
export class LoginButtonsComponent {
  @Input() authProviderConfigs: AuthConfiguration[];
  @Input() isLoggedIn: boolean;
  @Output() login = new EventEmitter<AuthConfiguration>();
  @Output() logout = new EventEmitter();
}