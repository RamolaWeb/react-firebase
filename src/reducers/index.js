import login from './login'
import register from './register'
import addNotes from './addNotes'
import viewDashBoard from './viewDashBoard'

export default {
  ...login,
  ...register,
  ...addNotes,
  ...viewDashBoard,
}