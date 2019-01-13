import { put, call, takeLatest } from 'redux-saga/effects'

import { ACTION_TYPES } from '../constant'
import app, { googleAuthProvider } from '../utils/firebaseConfig'

const signInWithEmailAndPassword = (email, password) => {
  return app.auth().signInWithEmailAndPassword(email, password)
}

const googleAuth = () => {
  return app.auth().signInWithRedirect(googleAuthProvider)
}

function* signInWithEmailAndPasswordSaga(action) {
  try {
    const { email, password } = action
    const response = yield call(signInWithEmailAndPassword, email, password)
    yield put({ type: ACTION_TYPES.SET_LOGIN_EMAIL_PASSWORD, data: response })
  }
  catch (e) {
    yield put({ type: ACTION_TYPES.ERROR_LOGIN_EMAIL_PASSWORD, error: e })
  }
}

function* googleAuthSaga() {
  try {
    const response = yield call(googleAuth)
    yield put({ type: ACTION_TYPES.SET_LOGIN_EMAIL_PASSWORD, data: response })
  }
  catch (e) {
    yield put({ type: ACTION_TYPES.ERROR_LOGIN_EMAIL_PASSWORD, error: e })
  }
}

export default function* watcherSaga() {
  yield takeLatest(ACTION_TYPES.GET_LOGIN_GOOGLE_AUTH, googleAuthSaga)
  yield takeLatest(ACTION_TYPES.GET_LOGIN_EMAIL_PASSWORD, signInWithEmailAndPasswordSaga)
}