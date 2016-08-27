import { configure, setAddon } from '@kadira/storybook';
import addGraphQL from './addon';
import '../src/index.css';

setAddon({
  addGraphQL: addGraphQL({ url: 'http://localhost:3000/graphql' }),
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
