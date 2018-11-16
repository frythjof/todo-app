import React, { Component } from 'react'
import styled from 'styled-components'
import ToggleButton from './ToggleButton'

export default class Config extends Component {
  render() {
    const { isDefault, onToggle } = this.props
    return (
      <section>
        <h2>Config</h2>
        <ToggleButton
          defaultText="Hide done todos"
          altText="Show done todos"
          isDefault={isDefault}
          onClick={onToggle}
        />
      </section>
    )
  }
}
