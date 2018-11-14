import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import GlobalStyle from '../src/GlobalStyle'

addDecorator(withKnobs)

function loadStories() {
  require('../src/stories')
}

// addDecorator(story => <React.Fragment>{story()}</React.Fragment>)

addDecorator(story => (
  <div style={{ backgroundColor: 'teal' }}>
    {story()}
    <GlobalStyle />
  </div>
))

configure(loadStories, module)
