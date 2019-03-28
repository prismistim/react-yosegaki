import {
  POST_YOSEGAKI
} from './actions'

const InitialState = {
  name: [],
  text: []
}

export default function reducer (state = InitialState, action) {
  switch(action.type) {
    case POST_YOSEGAKI:
      return Object.assign({}, state, {
        name: state.name.concat(action.name),
        text: state.text.concat(action.text)
      })
    
    default:
      return state
  }
}