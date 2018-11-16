import React, { Component } from 'react'
import Input from './Input'
import Todo from './Todo'
import Separator from './Separator'
import ProgressBar from './ProgressBar'
//import ToggleButton from './ToggleButton'
import uid from 'uid'
//import './Home.css'
import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  padding: 0 10px;
  background-color: darkgray;
`
// height: 100vh;

const TodoList = styled.ul`
  display: grid;
  grid-gap: 10px;
`

class Home extends Component {
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

        <TodoList>
          {this.props.showDoneTodos && this.renderDoneTodosWithSeparator()}
        </TodoList>
        <ProgressBar
          text="Progress: "
          progress={
            (this.renderDoneTodos().length / this.state.todos.length) * 100
          }
        />
      </Container>
    )
  }

  /* <ToggleButton
          defaultText="Foo"
          altText="Bar"
          isDefault={true}
          onClick={() => console.log('Hello')}
        /> */

  renderOpenTodos() {
    return this.state.todos
      .filter(todo => !todo.done)
      .map(this.renderSingleTodo)
  }

  renderDoneTodosWithSeparator() {
    return (
      <React.Fragment>
        <Separator text="DONE" />
        {this.state.todos.filter(todo => todo.done).map(this.renderSingleTodo)}
      </React.Fragment>
    )
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

export default Home
