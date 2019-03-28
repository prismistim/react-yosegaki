import {
  POST_YOSEGAKI
} from './actions'

const InitialState = {
  yosegaki: []
}

export default function reducer (state = InitialState, action) {
  switch(action.type) {
    case POST_YOSEGAKI:
      let yosegaki = state.yosegaki.concat([
        {
          description: action.description,
          name: action.name
        }
      ])
      let yosegaki_json = JSON.stringify(yosegaki)
      return Object.assign({}, state, {
        yosegaki: yosegaki,
        json: yosegaki_json
      })
    
    default:
      return state
  }
}