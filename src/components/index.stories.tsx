import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { setupGraphiQL } from '@storybook/addon-graphql'

import { Button } from 'antd'

import '../index.css';

storiesOf('Button', module)
  .addDecorator(withInfo) 
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


const graphiql = setupGraphiQL({ url: 'https://demo.getsaleor.com/graphql/' });

storiesOf('GraphQL Demo', module)
  .add('get user info', graphiql(`{
    product(id: "UHJvZHVjdDo2NA==") {
      name
      description
      category {
        name
      }
    }
  }`));