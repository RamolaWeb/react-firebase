import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextField, Button, Snackbar, Card,
    CardContent, } from '@material-ui/core'

import SocialButton from '../SocialButton'

import './style.css'

export default class SignIn extends Component {
    static propTypes = {
        onGoogleClick: PropTypes.func.isRequired,
        onSignIn: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            action: '',
            open: false,
        }
    }

    onTextChanged = (key, e) => {
        this.setState({
            [key]: e.target.value,
        })
    }

    onSignInClick = () => {
        const { onSignIn } = this.props
        const { email, password } = this.state
        if(email && password) {
            onSignIn(email, password)
        }
        else if(!email) {
            this.setState({
                action: 'Please Enter a Email',
                open: false,
            })
        }
        else if(!password) {
            this.setState({
                action: 'Please Enter a Password',
                open: true,
            })
        }
    }

    render() {
        const { email, password, open, action } = this.state
        const { onGoogleClick } = this.props
        return(
            <div
              className='container'
            >
                <Snackbar 
                onClose={() => this.onSnackBarClose()}
                open={open}
                action={action}
                autoHideDuration={6000}
                />
                <Card className='card'>
                    <CardContent>
                      <div
                        className='button-container'
                      >
                        <SocialButton
                          onSocialClick={onGoogleClick}
                          text='Sign In With Google'
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
                          id='emailSignIn'
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
                            id='passwordSignIn'
                            label='Password'
                            type='password'
                            variant='outlined'
                            value={password}
                        />
                      </div>
                      <div
                        className='button-container'
                      >
                        <Button
                          onClick={() => this.onSignInClick()}
                          size="large"
                          variant="contained"
                          color="primary">
                          Sign In
                        </Button>
                      </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}