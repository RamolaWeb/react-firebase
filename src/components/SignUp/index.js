import React, { Component } from 'react'
import { TextField, Button, Snackbar,
    Card, CardContent } from '@material-ui/core'
import PropTypes from 'prop-types'

import SocialButton from '../SocialButton'
import './style.css'

export default class SignUp extends Component {
    static propTypes = {
      onGoogleClick: PropTypes.func.isRequired,
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
        const { onSignUp } = this.props
        const { email, password, confirmPassword } = this.state
        if(email && password === confirmPassword)
            onSignUp(email, password)
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
        const { onGoogleClick } = this.props
        return(
            <div className='container'>
              <Snackbar 
                onClose={() => this.onSnackBarClose()}
                open={open}
                action={action}
                autoHideDuration={6000}
                />
                <Card
                  className='card'
                >
                    <CardContent>
                        <div
                          className='button-container'
                        >
                          <SocialButton
                            onSocialClick={onGoogleClick}
                            text='Sign Up With Google'
                          />
                        </div>
                        <div
                          className='text-container'
                        >
                            or
                        </div>
                        <div
                          className='text-field'
                        >
                          <TextField 
                            onChange={e => this.onTextChanged('email', e)}
                            id='email'
                            label='Email'
                            type='text'
                            variant='outlined'
                            value={email}
                          />
                        </div>
                        <div
                          className='text-field'
                        >
                          <TextField 
                            onChange={e => this.onTextChanged('password', e)}
                            id='password'
                            label='Password'
                            type='password'
                            variant='outlined'
                            value={password}
                          />
                        </div>
                        <div
                          className='text-field'
                        >
                          <TextField 
                            onChange={e => this.onTextChanged('confirmPassword', e)}
                            id='confirmPassword'
                            label='Confirm Password'
                            type='password'
                            variant='outlined'
                            value={confirmPassword}
                          />
                        </div>
                        <div
                          className='button-container'
                        >
                          <Button
                            onClick={() => this.onSignUpClick()}
                            size="large"
                            variant="contained"
                            color="primary">
                            Sign Up
                          </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}