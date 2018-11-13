import React, { Component } from 'react'
import styled from 'styled-components'
//import './Separator.css'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
`

const Text = styled.span`
  white-space: nowrap;
`

const Line = styled.div`
  margin: 0 10px;
  width: 100%;
  border-bottom: ${props => props.width || 4}px solid deeppink;
  // Erst definiere ich mit der Arrow-fct, dass es hier props gibt und dann was genommen werden soll.
`

export default class Separator extends Component {
  render() {
    return (
      <Wrapper>
        <Line width={10} />
        <Text>{this.props.text}</Text>
        <Line />
      </Wrapper>
    )
  }
}
