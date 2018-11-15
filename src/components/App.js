import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Home from './Home'
import Config from './Config'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 50px;
  height: 100vh;
`

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  grid-gap: 5px;
  background-color: darkgrey;
  border: 2px solid black;

  a:any-link {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 22px;
  }

  .active {
    background-color: deeppink;
  }
`

const App = () => (
  <Router>
    <Wrapper>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/config/" component={Config} />
      </div>
      <NavWrapper>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/config/">
          Settings
        </NavLink>
      </NavWrapper>
    </Wrapper>
  </Router>
)

export default App
