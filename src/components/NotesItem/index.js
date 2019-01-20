import React, { Component } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import './style.css'

export default class NotesItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  render() {
    const { title, description } = this.props 
    return (
      <Card className='card'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {title}
          </Typography>
          <Typography component="p">
              { description }
          </Typography>
        </CardContent>
      </Card>
    )
  }
}