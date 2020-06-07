import { addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    theme: themes.light,
  },
});

const comps = require.context('@spcy/comp.os-core/src', true, /.stories.tsx$/);

configure(() => {
  comps.keys().forEach(filename => comps(filename));
}, module);
