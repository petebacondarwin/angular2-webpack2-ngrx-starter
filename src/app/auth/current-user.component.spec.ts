import { DirectiveResolver } from '@angular/compiler';
import {inject, TestComponentBuilder, async, ComponentFixture} from '@angular/core/testing';
import {CurrentUserComponent} from './current-user.component';
import {createMockAuthState} from './mocks/mock-firebase-auth-state';
import {createContainerFixture} from '../../../testing/helpers/test-container';

describe('CurrentUserComponent', () => {
  let fixture: ComponentFixture<CurrentUserComponent>;

  beforeEach(async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(CurrentUserComponent).then((_fixture_) => fixture = _fixture_);
  })));

  it('should display current user', async(()=> {
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


fdescribe('CurrentUserComponent (via scaffold container)', () => {
  it('should display current user', async(inject([DirectiveResolver], (directiveResolver: DirectiveResolver) => {
    const metadata = directiveResolver.resolve(CurrentUserComponent);
    console.log(metadata.inputs);
  })));

});

generateHtmlFromSelector('ngForm[attr][foo="bar"].class-one:not([bad]).class-two:not(.class-three)');

function generateHtmlFromSelector(selector: string, inputAttributes: any = {}) {
  const ELEMENT_SELECTOR = /(^\w+)/i;
  const NOT_SELECTOR = /\:not\([^)]+\)/gi;
  const CLASS_SELECTOR = /\.([\w-]+)/gi;
  const ATTRIBUTE_SELECTOR = /\[(([\w\-]+)(?:="([^"]*)")?)\]/gi;

  // Take the first selector
  selector = selector.split(/\s*,\s*/)[0];
  // Remove any "not" selectors
  selector = selector.replace(NOT_SELECTOR, '');
  // Extract the element
  const element = ELEMENT_SELECTOR.exec(selector)[0] || 'div';
  // Extract css classes
  const classes = CLASS_SELECTOR.exec(selector).join(' ');
  // Extract attributes
  const attributes = {};
  selector.replace(ATTRIBUTE_SELECTOR, (match, attr, key, value) => { attributes[key] = value; return ''; });
  Object.assign(attributes, inputAttributes);
  const attributeStrings = Object.keys(attributes).map((key) => key + (attributes[key] ? `="${attributes[key]}"` : '' ));

  let html = `<${element}`;
  if (classes.length) html += ` class="${classes}"`;
  if (attributeStrings.length) html += ` ${attributeStrings.join(' ')}`;
  html += `></${element}>`;

  console.log(html);

  return html;
}

// element-name: select by element name.
// .class: select by class name.
// [attribute]: select by attribute name.
// [attribute=value]: select by attribute name and value.
// :not(sub_selector): select only if the element does not match the sub_selector.
// selector1, selector2: select if either selector1 or selector2 matches.