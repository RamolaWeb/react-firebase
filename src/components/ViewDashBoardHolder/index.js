import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Fab } from '@material-ui/core'
import { Add } from '@material-ui/icons'

import NotesList from '../NotesList'
import TimePicker from '../TimePicker'

import './style.css'

export default class ViewDashBoardHolder extends Component {
  static propTypes = {
     notes: PropTypes.array.isRequired,
     selectedDate: PropTypes.object.isRequired,
     onDateChange: PropTypes.func.isRequired,
     onAddClick: PropTypes.func.isRequired,
  }

  render() {
    const { notes, selectedDate, onDateChange, onAddClick } = this.props
    return (
       <div className='container'>
          <TimePicker
            selectedDate={selectedDate}
            onDateChange={onDateChange}
          />
          <NotesList
            notes={notes}
          />
          <Fab
            color="primary"
            aria-label="Add"
            onClick={onAddClick}
          >
           <Add />
          </Fab>
       </div>
    )
  }
}