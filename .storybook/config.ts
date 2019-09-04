import { addParameters, configure } from '@storybook/react';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

addParameters({
  options: {
    // isFullscreen: false,
    // showNav: true,
    showPanel: false,
    panelPosition: 'right',
    // hierarchySeparator: /\/|\./,
    // hierarchyRootSeparator: /\|/,
    // sidebarAnimations: true,
    // enableShortcuts: true,
    // isToolshown: true,
    // theme: undefined,
  },
});

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
