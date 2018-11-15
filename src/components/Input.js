import React, { Component } from 'react'
import styled from 'styled-components'
//import './Input.css'

const StyledInput = styled.input`
  display: flex;
  margin: 10px;
  border: 2px solid black;
`

export default class Input extends Component {
  render() {
    return (
      <StyledInput
        onKeyUp={this.handleKeyUp}
        placeholder={this.props.placeholder}
      />
    )
  }

  handleKeyUp = event => {
    const input = event.target
    if (event.key === 'Enter') {
      this.props.onEnter(input.value)
      input.value = ''
      input.focus()
    }
  }
}
