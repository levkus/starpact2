import React, { Component } from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import store from '../store/store'
import CubeContainer from './CubeContainer'
import TheCube from './TheCube'
import Nav from './Nav'

const AppWrapper = styled.div`
  background: white;
`

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWrapper>
          <Nav />
          <CubeContainer>
            <TheCube />
          </CubeContainer>
        </AppWrapper>
      </Provider>
    );
  }
}

export default App;
