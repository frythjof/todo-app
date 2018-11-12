import React, { Component } from 'react'
import Input from './Input'
import Todo from './Todo'
import './App.css'

class App extends Component {
  state = { 
    todos: this.load()
  }

  render() {
    this.save()
    return (
    <Input />
    <ul className="List" >
    {this.renderTodos()}
    </ul>
    )
  }

renderTodos(){
  return this.state.todos.map(todo => (
    <Todo
      key={todo.index}
      {...todo}
      onClick={() => this.openDoor(door.number)}
    />
  ))
}

addTodo() {

}

toggleDone() {
  const { todos } = this.state
    const index = todos.findIndex(t => d.number === number)
    const newTodos = [
      ...todos.slice(0, index),
      { ...todos[index], done: true },
      ...todos.slice(index + 1)
    ]

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
} catch(err) {
  return []
}
}

export default App
