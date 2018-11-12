import React, { Component } from 'react'
import './Todo.css'

export default class Todos extends Component {
  render() {
    const { text, onClick } = this.props
    return <li className="Todo">
        <span className={done ? 'Done' : ''}
        onClick={this.onClick}>
        {this.props.text } </span>
        <button>&times;</button>

        </li> />
  }
}
