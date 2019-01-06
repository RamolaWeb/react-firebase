/**
 * Generate reducer.
 *
 * @param {Object} initialState
 * @param {Object} handlers
 * @returns {function}
 */
const createReducer = (initialState, handlers) => {
    return function reducer(state = initialState, action) {
      if ({}.hasOwnProperty.call(handlers, action.type)) {
        return handlers[action.type](state, action)
      }
      return state
    }
}

export {
  createReducer,
}