import React, { Component } from 'react'
//import './Todo.css'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cornflowerblue;
  padding: 10px;
  margin: 10px;
`

const ToggButton = styled.button`
  margin-right: auto;
  background-color: deeppink;
  color: white;
  border-radius: 5%;
  font-weight: bold;

  &.active {
    background-color: hotpink;
  }
`

export default class ToggleButton extends Component {
  // Dieser state ist nur ein Startwert, der nur einmal geladen wird:
  state = {
    isDefault: this.props.isDefault == null ? true : this.props.isDefault
  }
  // Wenn der der Default-Wert null oder undefined ist, nimm true.

  render() {
    const { defaultText, altText } = this.props
    const { isDefault } = this.state
    return (
      <Container>
        <ToggButton
          className={isDefault ? '' : 'active'}
          onClick={this.toggleState}
        >
          {isDefault ? defaultText : altText}
        </ToggButton>
      </Container>
    )
  }

  toggleState = () => {
    this.setState({
      isDefault: !this.state.isDefault
    })
    this.props.onClick()
  }
}
// <span onClick={onToggle}>{text}</span>
