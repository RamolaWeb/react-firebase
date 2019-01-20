import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import { DatePicker } from 'material-ui-pickers'
import MomentUtils from '@date-io/moment'

export default class TimePicker extends Component {
   static propTypes = {
      selectedDate: PropTypes.object.isRequired,
      onDateChange: PropTypes.func.isRequired,
   }

   handleDateChange = date => {
    const { onDateChange } = this.props
    onDateChange(date)
   }

   render() {
     const { selectedDate } = this.props
     return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker value={selectedDate} onChange={date => this.handleDateChange(date)} />
        </MuiPickersUtilsProvider>
     )
   }
}