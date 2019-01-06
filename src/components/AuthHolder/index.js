import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

export default class AuthHolder extends Component {
    static propTypes = {
        onLogin: PropTypes.func.isRequired,
        onRegister: PropTypes.func.isRequired,
    }

    render() {
        const { onLogin, onRegister } = this.props
        return(
            <div>
                <Button
                    color="primary"
                    onClick={onLogin}
                    size="large"
                    variant="contained"
                  >
                    Login
                </Button>
                <Button
                    color="primary"
                    onClick={onRegister}
                    size="large"
                    variant="contained"
                  >
                    Register
                </Button>
            </div>
        )
    }
}