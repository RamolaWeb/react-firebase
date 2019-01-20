import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { ViewDashBoardHolder } from '../../components'

import { getNotes } from '../../actions'
import { getSavedNotes,
    isNotesFetching,
    isNotesFetched,
    isErrorInNotesFetching,
    getErrorInNotesFetching } from '../../reducers/viewDashBoard'


class ViewDashBoard extends Component {
  static propTypes = {
    errorFetchingNotes: PropTypes.string,
    fetchNotes: PropTypes.func.isRequired,
    isErrorInFetchingNotes: PropTypes.bool,
    isfetchedNotes: PropTypes.bool,
    isfetchingNotes: PropTypes.bool,
    notes: PropTypes.array,
  }

  static defaultProps = {
    errorFetchingNotes: '',
    isErrorInFetchingNotes: false,
    isfetchingNotes: false,
    isfetchedNotes: false,
    notes: [],
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedDate: new Date()
    }
  }

  onDateChangeListener = date => {
    this.setState({
      selectedDate: date,
    }, () => {
      const { fetchNotes } = this.props
      const { selectedDate } = this.state
      const startDate = new moment(selectedDate)
      startDate.hour(0)
      startDate.minute(0)
      const endDate = new moment(selectedDate)
      endDate.hour(23)
      endDate.minute(59)
      console.log(startDate.unix(), endDate.unix())
      fetchNotes(startDate.unix(), endDate.unix())
    })
  }

  render() {
    const { notes } = this.props
    const { selectedDate } = this.state
    return (
      <ViewDashBoardHolder
        notes={notes}
        selectedDate={selectedDate}
        onDateChange={d => this.onDateChangeListener(d)}
      />
    )
  }
}

const mapStateToProps = state => {
  const errorFetchingNotes = getErrorInNotesFetching(state)
  const isErrorInFetchingNotes = isErrorInNotesFetching(state)
  const isfetchedNotes = isNotesFetched(state)
  const isfetchingNotes = isNotesFetching(state)
  const notes = getSavedNotes(state)
  return {
    notes,
    errorFetchingNotes,
    isErrorInFetchingNotes,
    isfetchedNotes,
    isfetchingNotes,
  }
}

const container = connect(mapStateToProps, {
  fetchNotes: getNotes,
})(ViewDashBoard)

export default withRouter(container)