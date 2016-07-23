import {inject, TestComponentBuilder, async, ComponentFixture} from '@angular/core/testing';
import {CurrentUserComponent} from './current-user.component';
import {createMockAuthState} from './mocks/mock-firebase-auth-state';


describe('CurrentUserComponent', () => {
  let fixture: ComponentFixture<CurrentUserComponent>;

  beforeEach(async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(CurrentUserComponent).then((_fixture_) => fixture = _fixture_);
  })));

  it('should display current user', async(() => {
    let element = fixture.debugElement.nativeElement;

    fixture.detectChanges();
    expect(element.textContent).toEqual('');

    fixture.componentRef.instance.userInfo = createMockAuthState('avc123', 'test@user.com', 'Test User', 'test.provider');
    fixture.detectChanges();
    expect(element.textContent).toEqual('Logged in as Test User');


    fixture.componentRef.instance.userInfo = null;
    fixture.detectChanges();
    expect(element.textContent).toEqual('');
  }));
});