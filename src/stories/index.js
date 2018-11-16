import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { text, boolean, number } from '@storybook/addon-knobs'

import { Button, Welcome } from '@storybook/react/demo'
import GlobalStyle from '../components/GlobalStyle'
import Todo from '../components/Todo'
import ProgressBar from '../components/ProgressBar'
import Input from '../components/Input'
import { Container } from '../components/Home'
import Separator from '../components/Separator'
import ToggleButton from '../components/ToggleButton'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

storiesOf('Todo', module)
  .add('with text', () => (
    <Container>
      <Todo
        text={text('Display text', 'Geschenk1')}
        done={boolean('Disabled', false)}
        onToggle={action('toggleTodo')}
        onDelete={action('deleteTodo')}
      />
      <GlobalStyle />
    </Container>
  ))
  .add('with text in done state', () => (
    <React.Fragment>
      <Todo
        text="Geschenk1"
        done={true}
        onToggle={action('toggleTodo')}
        onDelete={action('deleteTodo')}
      />
      <GlobalStyle />
    </React.Fragment>
  ))

storiesOf('ProgressBar', module).add('from 10% - 100%', () => (
  <Container>
    <ProgressBar text="Progress: " progress="10" />
    <ProgressBar text="Progress: " progress="20" />
    <ProgressBar text="Progress: " progress="30" />
    <ProgressBar text="Progress: " progress="40" />
    <ProgressBar text="Progress: " progress="50" />
    <ProgressBar text="Progress: " progress="60" />
    <ProgressBar text="Progress: " progress="70" />
    <ProgressBar text="Progress: " progress="80" />
    <ProgressBar text="Progress: " progress="90" />
    <ProgressBar text="Progress: " progress="100" />
    <ProgressBar
      text={text('Display text', 'Progress(with Knobs): ')}
      progress={number('Percentage', 3, {
        range: true,
        min: 0,
        max: 100,
        step: 1
      })}
    />
    <GlobalStyle />
  </Container>
))

storiesOf('Input', module).add('for presents', () => (
  <Container>
    <Input
      onEnter={action('addTodo')}
      placeholder={text('Change placeholder', 'Insert your todo here')}
    />
  </Container>
))

storiesOf('Separator', module).add('with different text & width', () => (
  <Container>
    <Separator text={text('Display text 1', 'To Do')} borderwidth={10} />
    <Separator text={text('Display text 2', 'Done')} />
    <GlobalStyle />
  </Container>
))

storiesOf('ToggleButton', module).add('with different text', () => (
  <Container>
    <ToggleButton
      defaultText={text('Display button text', 'Foo')}
      altText={text('Display button alt text', 'Bar')}
      isDefault={boolean('Disabled', true)}
      onClick={action('console.log')}
    />
    <GlobalStyle />
  </Container>
))
