import React, { Component } from 'react'
import Input from './Input'
import Todo from './Todo'
import uid from 'uid'
import './App.css'

class App extends Component {
  state = {
    todos: [
      // this.load()
      { text: 'Geschenk1', done: false, id: 'kjhwerq' },
      { text: 'Geschenk2', done: false, id: 'kjhwerz' },
      { text: 'Geschenk3', done: false, id: 'kjhwert' }
    ]
  }

  render() {
    this.save()
    return (
      <div className="Container">
        <Input onEnter={this.addTodo} />
        <ul className="list">{this.renderTodos()}</ul>
      </div>
    )
  }

  renderTodos() {
    return this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        text={todo.text}
        done={todo.done}
        onToggle={() => this.toggleTodo(todo.id)}
        onDelete={() => this.deleteTodo(todo.id)}
      />
    ))
  }

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
