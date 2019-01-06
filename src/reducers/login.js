import { Map } from 'immutable'

import { ACTION_TYPES } from '../constant'
import { createReducer } from '../utils/helper'

const initialState = Map({
  isSigningIn: false,
  isSignedIn: false,
  errorInLogin: '',
  isErrorInLogin: false,
})

export default {
  login: createReducer(initialState, {
      [ACTION_TYPES.SET_LOGIN_EMAIL_PASSWORD]: (state, action) => {
          return state.withMutations(stateMap => {
              stateMap.set('isSignedIn', true)
              stateMap.set('isSigningIn', false)
          })
      },
      [ACTION_TYPES.ERROR_LOGIN_EMAIL_PASSWORD]: (state, action) => {
          return state.withMutations(stateMap => {
              stateMap.set('errorInLogin', 'Error Occured While Login')
              stateMap.set('isSignedIn', false)
              stateMap.set('isErrorInLogin', false)
          })
      },
  })
}

export const isSignedIn = state => (
    state.get(['login', 'isSignedIn'])
)

export const isSigningIn = state => (
    state.get(['login', 'isSigningIn'])
)

export const isErrorInLogin = state => (
    state.get(['login', 'isErrorInLogin'])
)

export const getErrorInLogin = state => (
    state.get(['login', 'errorInLogin'])
)
