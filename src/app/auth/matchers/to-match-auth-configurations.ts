import {AuthConfiguration} from '../auth.store';

declare namespace jasmine {
  interface Matchers {
    toMatchAuthConfigurations;
  }
}

export function toMatchAuthConfigurations(util, customEqualityTesters) {
  return {
    compare: (buttons: NodeListOf<Element>, configs: AuthConfiguration[]) => {
      if (buttons.length !== configs.length) return { pass: false };

      for (let index = 0; index < buttons.length; index++) {
        const button = buttons.item(index);
        const providerName = configs[index].name;
        if (button.textContent !== `Log in via ${providerName}`) return { pass: false };
      }

      return { pass: true };
    }
  };
}

beforeEach(() => jasmine.addMatchers({toMatchAuthConfigurations}));