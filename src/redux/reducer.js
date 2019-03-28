import {
  POST_YOSEGAKI
} from './actions'

const InitialState = {
  yosegaki: []
}

export default function reducer (state = InitialState, action) {
  switch(action.type) {
    case POST_YOSEGAKI:
      return Object.assign({}, state, {
        yosegaki: [
          ...state.yosegaki,
          {
            description: action.description,
            name: action.name
        }]
      })
    
    default:
      return state
  }
}