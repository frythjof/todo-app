import React, { Component } from 'react'
import styled from 'styled-components'
//import './Separator.css'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
`

const Text = styled.span`
  white-space: nowrap;
  font-weight: bold;
`

const Line = styled.div`
  margin: 0 10px;
  width: ${props => props.width || 0}%;
  border-bottom: ${props => props.borderwidth || 4}px solid
    rgb(${props => props.r}, ${props => props.g}, 0);
`

export default class ProgressBar extends Component {
  render() {
    return (
      <Wrapper>
        <Text>{this.props.text}</Text>
        <Line
          borderwidth={10}
          width={this.props.progress}
          r={((100 - this.props.progress) / 100) * 255}
          g={(this.props.progress / 100) * 255}
        />
        <Text>{Math.round(this.props.progress) + '%'}</Text>
      </Wrapper>
    )
  }
}
