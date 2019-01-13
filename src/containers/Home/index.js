import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { auth } from '../../utils/firebaseConfig'

import { AuthHolder } from '../../components'

class Home extends Component {

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        const { history } = this.props
        history.push('/dashboard')
      }
    })
  }

  onLogin = () => {
    const { history } = this.props
    history.push('/login')
  }

  onRegister = () => {
    const { history } = this.props
    history.push('/register')
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

export default withRouter(Home)
