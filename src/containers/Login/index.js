import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { auth } from '../../utils/firebaseConfig'

import { SignIn } from '../../components'
import { signInWithEmailAndPassword, googleAuth } from '../../actions'
import { isSignedIn, isSigningIn, isErrorInLogin, getErrorInLogin } from '../../reducers/login'

class Login extends Component {
    static propTypes = {
      isLogingIn: PropTypes.bool,
      isLoggedIn: PropTypes.bool,
      isLoggingError: PropTypes.bool,
      errorMessageLogIn: PropTypes.string,
      googleSignIn: PropTypes.func.isRequired,
      logIn: PropTypes.func.isRequired,
    }

    static defaultProps = {
      isLogingIn: false,
      isLoggedIn: false,
      isLoggingError: false,
      errorMessageLogIn: '',
    }

    // Add Some Method to show indicator after redirect
    componentDidMount() {
      auth.onAuthStateChanged(user => {
        if (user) {
          const { history } = this.props
          history.push('/view')
        }
      })
    }

    onSignInClick = (email, password) => {
      const { logIn } = this.props
      logIn(email, password)
    }

    onGoogleClickListener = () => {
      const { googleSignIn } = this.props
      googleSignIn()
    }

    render() {
        return (
          <div>
            <SignIn
              onGoogleClick={() => this.onGoogleClickListener()}
              onSignIn={(email, password) => this.onSignInClick(email, password)}/>  
          </div>
          
        )
      }
}

const mapStateToProps = state => {
  const isLogingIn = isSigningIn(state)
  const isLoggedIn = isSignedIn(state)
  const isLoggingError = isErrorInLogin(state)
  const errorMessageLogIn = getErrorInLogin(state)
  return {
    isLoggedIn,
    isLogingIn,
    isLoggingError,
    errorMessageLogIn,
  }
}

 export default withRouter(connect(mapStateToProps, {
  logIn: signInWithEmailAndPassword,
  googleSignIn: googleAuth,
})(Login))