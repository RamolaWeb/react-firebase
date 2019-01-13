import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'

import './style.css'

export default class SocialRegister extends Component {
  static propTypes = {
    onSocialClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  }

  render() {
    const { onSocialClick, text } = this.props
    return(
      <div>
          <div>
              <Button
                color='primary'
                onClick={onSocialClick}
                variant='contained'
              >
                { text }
              </Button>
          </div>
      </div>
    )
  }
} 