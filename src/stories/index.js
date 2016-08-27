import React from 'react';
import { storiesOf } from '@kadira/storybook';

storiesOf('GraphQL', module)
  .addGraphQL('get user info', `{
    user(id: "1") {
      name
    }
  }`);
