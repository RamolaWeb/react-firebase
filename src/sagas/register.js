import { put, call, takeLatest } from 'redux-saga/effects'

import { ACTION_TYPES } from '../constant'
import app, { googleAuthProvider } from '../utils/firebaseConfig'

const signUpWithEmailAndPassword = (email, password) => {
  return app.auth().createUserWithEmailAndPassword(email, password)
}

const googleAuth = () => {
  return app.auth().signInWithRedirect(googleAuthProvider)
}

function* signUpWithEmailAndPasswordSaga(action) {
  try {
    const { email, password } = action
    const response = yield call(signUpWithEmailAndPassword, email, password)
    yield put({ type: ACTION_TYPES.SET_REGISTER_EMAIL_PASSWORD, data: response })
  }
  catch (e) {
    yield put({ type: ACTION_TYPES.ERROR_REGISTER_EMAIL_PASSWORD, error: e })
  }
}

function* googleAuthSaga() {
  try {
    const response = yield call(googleAuth)
    yield put({ type: ACTION_TYPES.SET_REGISTER_EMAIL_PASSWORD, data: response })
  }
  catch (e) {
    yield put({ type: ACTION_TYPES.ERROR_REGISTER_EMAIL_PASSWORD, error: e })
  }
}

export default function* watcherSaga() {
  yield takeLatest(ACTION_TYPES.GET_REGISTER_GOOGLE_AUTH, googleAuthSaga)
  yield takeLatest(ACTION_TYPES.GET_REGISTER_EMAIL_PASSWORD, signUpWithEmailAndPasswordSaga)
}