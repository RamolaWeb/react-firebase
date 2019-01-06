import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { SignUp } from '../../components'
import { signUpWithEmailAndPassword } from '../../actions'
import { isSignUp, isSignedUp,
    isErrorInRegister, getErrorInRegister } from '../../reducers/register'

class Register extends Component {

  static propTypes = {
    isRegistering: PropTypes.bool,
    isRegistered: PropTypes.bool,
    isErrorRegister: PropTypes.bool,
    errorMessageInRegister: PropTypes.string,
    register: PropTypes.func.isRequired,
  }

  static defaultProps = {
    isRegistering: false,
    isRegistered: false,
    isErrorRegister: false,
    errorMessageInRegister: '',
  }
  
  onSignUpClick = (email, password) => {
    const { register } = this.props
    register(email, password)
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
  register: signUpWithEmailAndPassword,
})(Register)
