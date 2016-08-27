# Getting Started

A new experimental `addGraphQL` addon. Add this to `.storybook/config.js` to set it up.

```
setAddon({
  addGraphQL: addGraphQL({ url: 'http://localhost:3000/graphql' }),
});
```

Check `src/stories/index.js` for example stories. It'll look like this:

```js
import React from 'react';
import { storiesOf } from '@kadira/storybook';

storiesOf('GraphQL', module)
  .addGraphQL('get user info', `{
    user(id: "1") {
      name
    }
  }`);
```

## Running the Demo

Start the demo graphql server

```
cd graphql-demo
node index.js
```

And run the storybook

```
npm run storybook
```
