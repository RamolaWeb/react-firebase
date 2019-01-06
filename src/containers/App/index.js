import React, { Component } from 'react'
import './style.css'

import { SignUp, SignIn } from '../../components'
import app from '../../utils/firebaseConfig'

class App extends Component {
  
  onSignUpClick = (email, password) => {
    app.auth().createUserWithEmailAndPassword(email, password)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  onSignInClick = (email, password) => {
    app.auth().signInWithEmailAndPassword(email, password)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <SignUp
          onSignUp={(email, password) => this.onSignUpClick(email, password)}/>
        <SignIn
          onSignIn={(email, password) => this.onSignInClick(email, password)}/>  
      </div>
      
    )
  }
}

export default App
