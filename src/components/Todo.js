import React, { Component } from 'react'
//import './Todo.css'
import styled from 'styled-components'

const Todo = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: darkblue;
  color: white;
  padding: 10px;

  .Done {
    text-decoration: line-through red wavy;
  }
`

const DeleteButton = styled.button`
  margin-left: auto;
  background-color: deeppink;
  color: white;
  border-radius: 50%;
  padding: 2px 5px;
  font-weight: bold;
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
