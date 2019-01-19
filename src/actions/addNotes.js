import { ACTION_TYPES } from '../constant'

export const addNotes = ({title, notes}) => (
  { type: ACTION_TYPES.GET_SAVE_NOTES, title, notes}
)