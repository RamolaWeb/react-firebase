import { ACTION_TYPES } from '../constant'

export const signInWithEmailAndPassword = (email, password) => (
  { type: ACTION_TYPES.GET_LOGIN_EMAIL_PASSWORD, email, password }
)

export const googleAuth = () => (
  { type: ACTION_TYPES.GET_LOGIN_GOOGLE_AUTH }
)