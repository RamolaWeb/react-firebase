import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NotesItem from '../NotesItem'

import './style.css'

export default class NotesList extends Component {
  static propTypes = {
    notes: PropTypes.array.isRequired,
  }

  renderItem = () => {
    const { notes } = this.props
    return notes.map((n, i) => {
        const { title, notes } = n
        return (
          <NotesItem
            key={i}
            title={title}
            description={notes}
          />
        )
    })
  }

  render() {
    const { notes } = this.props
    const isEmpty = notes.length === 0
    return (
      <div className='container'>
        {isEmpty && (
          <p>There is notes of this day</p>
        )
        }
        {this.renderItem()}
      </div>
    )
  }
}