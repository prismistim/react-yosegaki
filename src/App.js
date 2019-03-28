import React from 'react'
import './App.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as action from './redux/actions'
import PostYosegaki from './postYosegaki'
import ListUp from './listUp'

// Omajinai
function mapStateToProps (state) {
  return state;
}
function mapDispatchToProps (dispatch) {
  return {
      actions: bindActionCreators(action, dispatch)
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <PostYosegaki {...this.props} />
        <ListUp {...this.props} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
