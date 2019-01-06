import { ACTION_TYPES } from '../constant'

export const signUpWithEmailAndPassword = (email, password) => (
    { type: ACTION_TYPES.GET_REGISTER_EMAIL_PASSWORD, email, password }
)
