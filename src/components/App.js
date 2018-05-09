import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
import CubeContainer from './CubeContainer'
import TheCube from './TheCube'
import Nav from './Nav'

const CubeWithNav = () => (
  <React.Fragment>
    <Nav />
    <CubeContainer>
      <TheCube />
    </CubeContainer>
  </React.Fragment>
)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={() => <Redirect to='/story' />} />
            <Route path='/:section' component={CubeWithNav} />
            <Redirect to='/story' />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
