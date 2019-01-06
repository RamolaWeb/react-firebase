import React, { Component } from 'react'
import { TextField, Button, Snackbar } from '@material-ui/core'
import PropTypes from 'prop-types'
import './style.css'

export default class SignUp extends Component {
    static propTypes = {
        onSignUp: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            open: false,
            action: '',
        }
    }

    onTextChanged = (key, e) => {
        this.setState({
            [key]: e.target.value,
        })
    }

    onSignUpClick = () => {
        const { onSignIn } = this.props
        const { email, password, confirmPassword } = this.state
        if(email && password === confirmPassword)
            onSignIn(email, password)
        else if(password !== confirmPassword) {
            this.setState({
                open: true,
                action: 'Please make sure to confirm your password'
            })
        }
        else if(!email) {
            this.setState({
                open: true,
                action: 'Please enter a email'
            })
        }
    }

    onSnackBarClose = () => {
        this.setState({
            open: false,
            action: '',
        })
    }

    render() {
        const { email, password, confirmPassword, open, action } = this.state
        return(
            <div className='container'>
              <Snackbar 
                onClose={() => this.onSnackBarClose()}
                open={open}
                action={action}
                autoHideDuration={6000}
                />
              <TextField 
                onChange={e => this.onTextChanged('email', e)}
                id='email'
                label='Email'
                type='text'
                variant='outlined'
                value={email}
              />
              <TextField 
                  onChange={e => this.onTextChanged('password', e)}
                  id='password'
                  label='Password'
                  type='password'
                  variant='outlined'
                  value={password}
              />
              <TextField 
                  onChange={e => this.onTextChanged('confirmPassword', e)}
                  id='confirmPassword'
                  label='Confirm Password'
                  type='password'
                  variant='outlined'
                  value={confirmPassword}
              />
              <Button
                onClick={() => this.onSignUpClick()}
                size="large"
                variant="contained"
                color="primary">
                SignUp
              </Button>
            </div>
        )
    }
}