import React, { Component } from 'react'
import './style.css'

import { SignUp } from '../../components'
import app from '../../utils/firebaseConfig'

class App extends Component {
  
  onSignUpClick = (email, password) => {
    app.auth().createUserWithEmailAndPassword(email, password).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <SignUp
        onSignUp={(email, password) => this.onSignUpClick(email, password)}/>
    )
  }
}

export default App
