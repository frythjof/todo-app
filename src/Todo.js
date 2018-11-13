import React, { Component } from 'react'
//import './Todo.css'
import styled from 'styled-components'

const Todo = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: darkblue;
  color: white;

  .Done {
    text-decoration: line-through;
  }
`

const DeleteButton = styled.button`
  margin-left: auto;
  background-color: deeppink;
  color: white;
  border-radius: 50%;
`

export default class Todos extends Component {
  render() {
    const { text, done, onToggle, onDelete } = this.props
    return (
      <Todo>
        <span className={done ? 'Done' : ''} onClick={onToggle}>
          {text}
        </span>
        <DeleteButton onClick={onDelete}>&times;</DeleteButton>
      </Todo>
    )
  }
}
