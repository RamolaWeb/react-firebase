import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NotesList from '../NotesList'
import TimePicker from '../TimePicker'

import './style.css'

export default class ViewDashBoardHolder extends Component {
  static propTypes = {
     notes: PropTypes.array.isRequired,
     selectedDate: PropTypes.object.isRequired,
     onDateChange: PropTypes.func.isRequired,
  }

  render() {
    const { notes, selectedDate, onDateChange } = this.props
    return (
       <div className='container'>
          <TimePicker
            selectedDate={selectedDate}
            onDateChange={onDateChange}
          />
          <NotesList
            notes={notes}
          />
       </div>
    )
  }
}