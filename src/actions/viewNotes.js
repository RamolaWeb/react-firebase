import { ACTION_TYPES } from '../constant'

export const getNotes = (startTime, endTime) => (
  { type: ACTION_TYPES.GET_SAVED_NOTES, startTime, endTime }
)