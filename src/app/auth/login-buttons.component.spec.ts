import {inject, TestComponentBuilder, async, ComponentFixture} from '@angular/core/testing';
import {LoginButtonsComponent} from './login-buttons.component';
import './matchers/to-match-auth-configurations';

describe('LoginButtonsComponent', () => {
  let fixture: ComponentFixture<LoginButtonsComponent>;
  let element: HTMLElement;

  beforeEach(async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(LoginButtonsComponent).then((_fixture_) => fixture = _fixture_);
  })));

  describe('when not authenticated', () => {

    it('should display a login button for each provider', async(() => {
      let loginButtons: NodeListOf<Element>;
      element = fixture.debugElement.nativeElement;

      fixture.detectChanges();
      expect(element.textContent.trim()).toEqual('');

      fixture.componentRef.instance.authProviderConfigs = [
        { name: 'Provider 1'},
        { name: 'Provider 2'}
      ];
      fixture.detectChanges();

      loginButtons = element.querySelectorAll('button');
      expect(loginButtons).toMatchAuthConfigurations(fixture.componentRef.instance.authProviderConfigs);

      fixture.componentRef.instance.authProviderConfigs = [
        { name: 'Provider 1'},
        { name: 'Provider 2'},
        { name: 'Provider 3'}
      ];
      fixture.detectChanges();
      loginButtons = element.querySelectorAll('button');
      expect(loginButtons).toMatchAuthConfigurations(fixture.componentRef.instance.authProviderConfigs);
    }));

    it('should trigger login event when a login button is clicked', () => {
      const loginHandler = jasmine.createSpy('login handler');
      fixture.componentRef.instance.login.subscribe(loginHandler);
      expect(loginHandler).not.toHaveBeenCalled();

      let element = fixture.debugElement.nativeElement;
      fixture.componentRef.instance.authProviderConfigs = [{ name: 'Provider 1'}];
      fixture.detectChanges();

      element.querySelector('button').click();
      expect(loginHandler).toHaveBeenCalled();
    });
  });

  describe('when authenticated', () => {

    // Simulate a login before each spec
    beforeEach(() => {
      fixture.componentRef.instance.isLoggedIn = true;
      fixture.detectChanges();
    });

    it('should display a logout button', () => {
      fixture.componentRef.instance.isLoggedIn = true;
      fixture.detectChanges();
      const logoutButton = fixture.nativeElement.querySelector('button');
      expect(logoutButton.textContent).toEqual('Logout');
    });

    it('should trigger logout event when the logout button is clicked', () => {
      const logoutHandler = jasmine.createSpy('logout handler');
      fixture.componentRef.instance.logout.subscribe(logoutHandler);
      expect(logoutHandler).not.toHaveBeenCalled();

      const logoutButton = fixture.nativeElement.querySelector('button');
      logoutButton.click();
      expect(logoutHandler).toHaveBeenCalled();
    });
  });
});
