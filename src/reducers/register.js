import { Map } from 'immutable'

import { ACTION_TYPES } from '../constant'
import { createReducer } from '../utils/helper'

const initialState = Map({
  isSignUp: false,
  isSignedUp: false,
  errorInRegister: '',
  isErrorInRegister: false,
})

export default {
  register: createReducer(initialState, {
      [ACTION_TYPES.SET_REGISTER_EMAIL_PASSWORD]: (state, action) => {
          return state.withMutations(stateMap => {
              stateMap.set('isSignedUp', true)
              stateMap.set('isSignUp', false)
          })
      },
      [ACTION_TYPES.ERROR_REGISTER_EMAIL_PASSWORD]: (state, action) => {
          return state.withMutations(stateMap => {
              stateMap.set('errorInRegister', 'Error Occured While Login')
              stateMap.set('isSignUp', false)
              stateMap.set('isErrorInRegister', false)
          })
      },
  })
}

export const isSignUp= state => (
    state.get(['register', 'isSignUp'])
)

export const isSignedUp = state => (
    state.get(['register', 'isSignedUp'])
)

export const isErrorInRegister = state => (
    state.get(['register', 'isErrorInRegister'])
)

export const getErrorInRegister = state => (
    state.get(['register', 'errorInRegister'])
)
