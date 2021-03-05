export default (state = 0, action) => {
  switch (action.type) {
    case 'SQUARE':
      return state * state
    case 'DOUBLE':
      return state * 2
    case 'DECREMENT':
      return state - 1
    default:
      return state + 1
  }
}