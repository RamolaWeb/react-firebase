import { put, call, takeLatest } from 'redux-saga/effects'

import { database, auth } from '../utils/firebaseConfig'
import { ACTION_TYPES } from '../constant'

const saveNotes = (title, notes) => {
  const { currentUser } = auth
  let uid = ''
  if (currentUser !== null) {
    ({ uid } = currentUser)
  }
  const post = {
    title,
    notes,
    createdAt: Date.now(),
  }

  const postKey = database.ref().child('/notes/'+uid).push()
  return postKey.set(post)
}

function* saveNotesSaga(action) {
  try {
    const { title, notes } = action
    const response = yield call(saveNotes, title, notes)
    yield put({ type: ACTION_TYPES.SET_SAVE_NOTES, data: response})
  }
  catch (e) {
    yield put({ type: ACTION_TYPES.ERROR_SAVE_NOTES, error: e })
  }
}

export default function* watcherSaga() {
  yield takeLatest(ACTION_TYPES.GET_SAVE_NOTES, saveNotesSaga)
}