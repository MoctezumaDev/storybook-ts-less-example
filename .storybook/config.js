import { configure} from '@storybook/react';

function loadStories() {
  require('../less/initial.less');
  require('../stories/buttons/buttons.tsx');
}

configure(loadStories, module);
