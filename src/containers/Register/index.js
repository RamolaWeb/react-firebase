import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { auth } from '../../utils/firebaseConfig'

import { SignUp } from '../../components'
import { signUpWithEmailAndPassword, registerGoogleAuth } from '../../actions'
import { isSignUp, isSignedUp,
    isErrorInRegister, getErrorInRegister } from '../../reducers/register'

class Register extends Component {

  static propTypes = {
    isRegistering: PropTypes.bool,
    isRegistered: PropTypes.bool,
    isErrorRegister: PropTypes.bool,
    errorMessageInRegister: PropTypes.string,
    googleSignUp: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
  }

  static defaultProps = {
    isRegistering: false,
    isRegistered: false,
    isErrorRegister: false,
    errorMessageInRegister: '',
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        const { history } = this.props
        history.push('/view')
      }
    })
  }
  
  onSignUpClick = (email, password) => {
    const { register } = this.props
    register(email, password)
  }

  onGoogleClickListener = () => {
    const { googleSignUp } = this.props
    googleSignUp()
  }

  render() {
    return (
      <div>
        <SignUp
          onGoogleClick={() => this.onGoogleClickListener()}
          onSignUp={(email, password) => this.onSignUpClick(email, password)}/>  
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  const isRegistering = isSignUp(state)
  const isRegistered = isSignedUp(state)
  const isErrorRegister = isErrorInRegister(state)
  const errorMessageInRegister = getErrorInRegister(state)
  return {
    isRegistering,
    isRegistered,
    isErrorRegister,
    errorMessageInRegister,
  }
}

export default connect(mapStateToProps, {
  googleSignUp: registerGoogleAuth,
  register: signUpWithEmailAndPassword,
})(Register)
