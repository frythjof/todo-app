import React, { Component } from 'react'
import './Todo.css'

export default class Todos extends Component {
  render() {
    const { text, done, onToggle, onDelete } = this.props
    return (
      <li className="Todo">
        <span className={done ? 'Done' : ''} onClick={onToggle}>
          {text}
        </span>
        <button onClick={onDelete}>&times;</button>
      </li>
    )
  }
}
