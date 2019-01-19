import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { AddNotes } from '../../components'

import { addNotes } from '../../actions'
import {isNotesSaving, isNotesSaved,
  isErrorInNotesSaved, getErrorInNotesSaved } from '../../reducers/addNotes' 

class Dashboard extends Component {

  static propTypes = {
    errorNotesSaving: PropTypes.string,
    isSavingNotes: PropTypes.bool,
    isSavedNotes: PropTypes.bool,
    isErrorInSaving: PropTypes.bool,
    saveNotes: PropTypes.func.isRequired,
  }

  static defaultProps = {
    errorNotesSaving: '',
    isSavingNotes: false,
    isSavedNotes: false,
    isErrorInSaving: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      notes: ''
    }
  }

  onAddClickListnerer = () => {
    const { notes, title } = this.state
    const { saveNotes } = this.props
    saveNotes({title, notes})
  }

  onUpdateTextValue = (key, v) => {
    this.setState({
      [key]: v,
    })
  }

  render() {
    const { notes, title } = this.state
    return(
      <div>
        <AddNotes
          title={title}
          notes={notes}
          onAddClick={() => this.onAddClickListnerer()}
          onUpdateText={(k,v) => this.onUpdateTextValue(k,v)}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const errorNotesSaving = getErrorInNotesSaved(state)
  const isSavingNotes = isNotesSaving(state)
  const isSavedNotes = isNotesSaved(state)
  const isErrorInSaving = isErrorInNotesSaved(state)
  return {
    errorNotesSaving,
    isSavingNotes,
    isSavedNotes,
    isErrorInSaving,
  }
}

const container = connect(mapStateToProps, {
  saveNotes: addNotes,
})(Dashboard)

export default withRouter(container)