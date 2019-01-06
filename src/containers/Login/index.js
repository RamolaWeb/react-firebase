import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { SignIn } from '../../components'
import { signInWithEmailAndPassword } from '../../actions'
import { isSignedIn, isSigningIn, isErrorInLogin, getErrorInLogin } from '../../reducers/login'

class Login extends Component {
    static propTypes = {
      isLogingIn: PropTypes.bool,
      isLoggedIn: PropTypes.bool,
      isLoggingError: PropTypes.bool,
      errorMessageLogIn: PropTypes.string,
      logIn: PropTypes.func.isRequired,
    }

    static defaultProps = {
      isLogingIn: false,
      isLoggedIn: false,
      isLoggingError: false,
      errorMessageLogIn: '',
    }

    onSignInClick = (email, password) => {
        const { logIn } = this.props
        logIn(email, password)
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

const mapStateToProps = state => {
  const isLogingIn = isSignedIn(state)
  const isLoggedIn = isSigningIn(state)
  const isLoggingError = isErrorInLogin(state)
  const errorMessageLogIn = getErrorInLogin(state)
  return {
    isLoggedIn,
    isLogingIn,
    isLoggingError,
    errorMessageLogIn,
  }
}

export default connect(mapStateToProps, {
  logIn: signInWithEmailAndPassword,
})(Login)