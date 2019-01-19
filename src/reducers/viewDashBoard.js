import { Map, List } from 'immutable'

import { createReducer } from '../utils/helper'
import { ACTION_TYPES } from '../constant'

const initialState = Map({
  notes: List([]),
  isNotesFetching: false,
  isNotesFetched: false,
  isErrorInNotesFetching: false,
  errorInNotesFetching: '',
})

export default {
  viewNotes: createReducer(initialState, {
    [ACTION_TYPES.SET_SAVED_NOTES]: (state, action) => {
      const { data } = action
      console.log(data)
      return state.withMutations(stateMap => {
        stateMap.set('notes', List(data))
        stateMap.set('isNotesFetching', false)
        stateMap.set('isNotesFetched', true)
      })
    },
    [ACTION_TYPES.ERROR_SAVED_NOTES]: (state, action) => {
      const { error } = action
      const { message } = error
      return state.withMutations(stateMap => {
        stateMap.set('notes', List([]))
        stateMap.set('isNotesFetching', false)
        stateMap.set('errorInNotesFetching', message)
        stateMap.set('isErrorInNotesFetching', true)
      })
    },
    [ACTION_TYPES.START_FETCHING_NOTES]: (state, action) => (
      state.withMutations(stateMap => {
        stateMap.set('isNotesFetched', false)
        stateMap.set('isNotesFetching', true)
        stateMap.set('errorInNotesFetching', '')
        stateMap.set('isErrorInNotesFetching', false)
      })
    ),
  })
}

export const getSavedNotes = state => (
  state.getIn(['viewNotes', 'notes']).toJS()
)

export const isNotesFetching = state => (
  state.getIn(['viewNotes', 'isNotesFetching'])
)

export const isNotesFetched = state => (
  state.getIn(['viewNotes', 'isNotesFetched'])
)

export const isErrorInNotesFetching = state => (
  state.getIn(['viewNotes', 'isErrorInNotesFetching'])
)

export const getErrorInNotesFetching = state => (
  state.getIn(['viewNotes', 'errorInNotesFetching'])
)