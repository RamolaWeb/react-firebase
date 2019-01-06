import React, { Component } from 'react'
import './style.css'

import { AuthHolder } from '../../components'

class App extends Component {

  onLogin = () => {
    console.log('on login click')
  }

  onRegister = () => {
    console.log('on register click')
  }

  render() {
    return (
      <div>
        <AuthHolder 
          onLogin={() => this.onLogin()}
          onRegister={() => this.onRegister()}
          />
      </div>
      
    )
  }
}

export default App
