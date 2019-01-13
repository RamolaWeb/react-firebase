import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { AddNotes } from '../../components'

class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      notes: ''
    }
  }

  onAddClickListnerer = () => {
    const { notes } = this.state
  }

  onUpdateTextValue = (key, v) => {
    this.setState({
      [key]: v,
    })
  }

  render() {
    const { notes } = this.state
    return(
      <div>
        <AddNotes
          notes={notes}
          onAddClick={() => this.onAddClickListnerer()}
          onUpdateText={(k,v) => this.onUpdateTextValue(k,v)}
        />
      </div>
    )
  }
}

export default withRouter(Dashboard)