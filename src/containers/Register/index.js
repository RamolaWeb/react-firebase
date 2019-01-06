import React, { Component } from 'react'

import { SignUp } from '../../components'
import app from '../../utils/firebaseConfig'

class Register extends Component {
  
  onSignUpClick = (email, password) => {
    app.auth().createUserWithEmailAndPassword(email, password)
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
      </div>
      
    )
  }
}

export default Register
