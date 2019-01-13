import React, { Component } from 'react'
import { Card, Button,
  TextField, CardContent } from '@material-ui/core'
import PropTypes from 'prop-types'

import './style.css'

export default class AddNotes extends Component {
  static propTypes = {
    notes: PropTypes.string.isRequired,
    onAddClick: PropTypes.func.isRequired,
    onUpdateText: PropTypes.func.isRequired,
  }

  onTextChange = (k, e) => {
    const { onUpdateText } = this.props
    onUpdateText(k, e.target.value)
  }

  render() {
    const { notes, onAddClick } = this.props
    return(
      <div className='container'>
        <Card className='card'>
          <CardContent>
            <div className='text-container'>
              <TextField
                onChange={e => this.onTextChange('notes', e)}
                id='notesField'
                label='Add a notes'
                type='text'
                variant='outlined'
                value={notes}
              />
            </div>
            <div className='button-container'>
              <Button
                onClick={onAddClick}
                size="large"
                variant="contained"
                color="primary"
              >
                Add
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}