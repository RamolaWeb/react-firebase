import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux-immutable'

import reducer from '../../reducers'
import saga from '../../sagas'

import Login from '../Login'
import Register from '../Register'
import Home from '../Home'
import Dashboard from '../Dashboard'
import ViewDashBoard from '../ViewDashBoard'

// create our store
const sagaMiddleware = createSagaMiddleware()

const configureStore = (() => {
  let store
  return {
    create() {
      if (!store) {
        store = createStore(combineReducers(reducer), compose(applyMiddleware(sagaMiddleware)))
      }
      return store
    },
  }
})()

const store = configureStore.create()
sagaMiddleware.run(saga)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
          <Router>
            <Switch>
              <Route exact component={Home} path='/'></Route>
              <Route exact component={Login} path='/login'></Route>
              <Route exact component={Register} path='/register'></Route>
              <Route exact component={Dashboard} path='/add'></Route>
              <Route exact component={ViewDashBoard} path='/view'></Route>
            </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
