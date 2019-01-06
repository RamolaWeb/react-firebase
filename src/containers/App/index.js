import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Login from '../Login'
import Register from '../Register'
import Home from '../Home'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact component={Home} path='/'></Route>
            <Route exact component={Login} path='/login'></Route>
            <Route exact component={Register} path='/register'></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
