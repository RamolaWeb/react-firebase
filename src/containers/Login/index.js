import React, { Component } from 'react'

import { SignIn } from '../../components'

import app from '../../utils/firebaseConfig'

export default class Login extends Component {
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
            <SignIn
              onSignIn={(email, password) => this.onSignInClick(email, password)}/>  
          </div>
          
        )
      }
}