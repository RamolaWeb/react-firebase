import { put, call, takeLatest } from 'redux-saga/effects'

import { auth, database } from '../utils/firebaseConfig'

import { ACTION_TYPES } from '../constant'

const fetchSavedNotes = (startTime, endTime) => {
    const { currentUser } = auth
    let uid = ''
    if (currentUser !== null) {
      ({ uid } = currentUser)
    }
    return database.ref('/notes/'+uid).orderByChild('createdAt').startAt(startTime).endAt(endTime)
}


function* fetchSavedNotesSaga(action) {
  try {
    const { startTime, endTime } = action
    yield put({ type: ACTION_TYPES.START_FETCHING_NOTES })
    const response = yield call(fetchSavedNotes, startTime, endTime)
    yield put({ type: ACTION_TYPES.SET_SAVED_NOTES, data: response.val()})
  }
  catch (e) {
    yield put({ type: ACTION_TYPES.ERROR_SAVED_NOTES, error: e })
  }
}

export default function* watcherSaga() {
  yield takeLatest(ACTION_TYPES.GET_SAVED_NOTES, fetchSavedNotesSaga)
}