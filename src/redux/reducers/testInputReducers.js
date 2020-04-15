export default function reducer(state = '', action) {
  switch (action.type) {
    case 'inputData':
      return action.payload 
    default:
      return state
  }
}