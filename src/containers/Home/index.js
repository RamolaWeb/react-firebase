import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { AuthHolder } from '../../components'

class Home extends Component {

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
