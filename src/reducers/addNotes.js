import { Map } from 'immutable'

import { createReducer } from '../utils/helper'
import { ACTION_TYPES } from '../constant'

const initialState = Map({
  isNotesSaving: false,
  isNotesSaved: false,
  isErrorInNotesSaved: false,
  errorInNotesSaved: '',
})

export default {
  addNotes: createReducer(initialState, {
    [ACTION_TYPES.SET_SAVE_NOTES]: (state, action) => {
      return state.withMutations(stateMap => {
        stateMap.set('isNotesSaving', false)
        stateMap.set('isNotesSaved', true)
      })
    },
    [ACTION_TYPES.ERROR_SAVE_NOTES]: (state, action) => {
        const { error } = action
        const { message } = error
        return state.withMutations(stateMap => {
            stateMap.set('isNotesSaving', false)
            stateMap.set('isNotesSaved', false)
            stateMap.set('errorInNotesSaved', message)
            stateMap.set('isErrorInNotesSaved', true)
        })
    },
    [ACTION_TYPES.START_SAVING_NOTES]: (state, action) => (
      state.withMutations(stateMap => {
        stateMap.set('isNotesSaving', true)
        stateMap.set('isNotesSaved', false)
        stateMap.set('errorInNotesSaved', '')
        stateMap.set('isErrorInNotesSaved', false)
      })
    ),
  }),
}

export const isNotesSaving = state => (
  state.getIn(['addNotes', 'isNotesSaving'])
)

export const isNotesSaved = state => (
    state.getIn(['addNotes', 'isNotesSaved'])
)

export const isErrorInNotesSaved = state => (
    state.getIn(['addNotes', 'isErrorInNotesSaved'])
)

export const getErrorInNotesSaved = state => (
    state.getIn(['addNotes', 'errorInNotesSaved'])
)