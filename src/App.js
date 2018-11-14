import React, { Component } from 'react'
import Input from './Input'
import Todo from './Todo'
import Separator from './Separator'
import ProgressBar from './ProgressBar'
import ToggleButton from './ToggleButton'
import uid from 'uid'
//import './App.css'
import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  padding: 0 10px;
  height: 100vh;
  background-color: darkgray;
`

const TodoList = styled.ul`
  display: grid;
  grid-gap: 10px;
`

class App extends Component {
  state = {
    todos: [
      // this.load()
      { text: 'Geschenk1', done: false, id: 'kjhwerq' },
      { text: 'Geschenk2', done: false, id: 'kjhwerz' },
      { text: 'Geschenk3', done: false, id: 'kjhwert' },
      { text: 'Geschenk4', done: false, id: 'kjhwers' },
      { text: 'Geschenk5', done: false, id: 'kjhwerd' },
      { text: 'Geschenk6', done: false, id: 'kjhwerf' },
      { text: 'Geschenk7', done: false, id: 'kjhwerg' }
    ]
  }

  render() {
    this.save()
    return (
      <Container>
        <Input onEnter={this.addTodo} placeholder="Insert your todo here" />
        <Separator text="TO DO" />
        <TodoList>{this.renderOpenTodos()}</TodoList>
        <Separator text="DONE" />
        <TodoList>{this.renderDoneTodos()}</TodoList>
        <ProgressBar
          text="Progress: "
          progress={
            (this.renderDoneTodos().length / this.state.todos.length) * 100
          }
        />
        <ToggleButton
          defaultText="Foo"
          altText="Bar"
          //isDefault={true}
          onClick={() => console.log('Hello')}
        />
      </Container>
    )
  }

  renderOpenTodos() {
    return this.state.todos
      .filter(todo => !todo.done)
      .map(this.renderSingleTodo)
  }

  renderDoneTodos() {
    return this.state.todos.filter(todo => todo.done).map(this.renderSingleTodo)
  }

  renderSingleTodo = todo => (
    <Todo
      key={todo.id}
      text={todo.text}
      done={todo.done}
      onToggle={() => this.toggleTodo(todo.id)}
      onDelete={() => this.deleteTodo(todo.id)}
    />
  )

  addTodo = text => {
    this.setState({
      todos: [{ text, done: false, id: uid() }, ...this.state.todos]
    })
  }

  toggleTodo = id => {
    const { todos } = this.state
    const index = todos.findIndex(t => t.id === id)
    const newTodos = [
      ...todos.slice(0, index),
      { ...todos[index], done: !todos[index].done },
      ...todos.slice(index + 1)
    ]

    this.setState({
      todos: newTodos
    })
  }

  deleteTodo = id => {
    const { todos } = this.state
    const index = todos.findIndex(t => t.id === id)
    const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)]

    this.setState({
      todos: newTodos
    })
  }

  save() {
    localStorage.setItem('todo-app--todos', JSON.stringify(this.state.todos))
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('todo-app--todos')) || []
    } catch (err) {
      return []
    }
  }
}

export default App
