import { addProviders, inject, TestComponentBuilder, async } from '@angular/core/testing';

import { App } from './app.component';

describe('App component', () => {
  let builder : TestComponentBuilder;
  beforeEach(() => addProviders([]));
  beforeEach(inject([TestComponentBuilder], (_builder) => {
    builder = _builder;
  }));

  it('should display messages', async(() =>
    builder.createAsync(App).then((fixture) => {
      let element = fixture.debugElement.nativeElement;

      fixture.detectChanges();
      expect(element.innerHTML).toContain('HELLO ANGULAR 2 AND WEBPACK 2');
      expect(element.innerHTML).toContain('Your Content Here');

      fixture.componentInstance.name = 'Jo Bloggs';
      expect(element.innerHTML).not.toContain('Your Content Here Jo Bloggs');

      fixture.detectChanges();
      expect(element.innerHTML).toContain('Your Content Here Jo Bloggs');

    })
  ));

});