import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import CubeSection from './TheCubeSection'
import AboutMe from './AboutMe'
import { convertSectionNameToCubeSide } from './magic'

const TheCubeWrapper = styled.div`
  width: 40vw;
  transform: scaleX(0.5) scaleY(0.5) scaleZ(0.5);
  transform-style: preserve-3d;
  zoom: 2;
`

const Header = styled(CubeSection)`
  height: 50px;
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 400;
`

const Footer = styled(CubeSection)`
  height: 50px;
  transition-delay: 0.2s;
  font-size: 0.75rem;
`

const MainSection = styled(CubeSection)`
  height: calc(100vh - 300px);
  transition-delay: 0.1s;
  font-size: 0.75rem;
`

class TheCube extends React.Component {
  state = {
    side: 'front'
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    const { section } = nextProps.match.params
    const side = convertSectionNameToCubeSide(section)
    return side !== prevState.side ? { side } : null
  }

  render () {
    return (
      <TheCubeWrapper>
        <Header
          side={this.state.side}
          border='bottom'
          left='Связь'
          right='Портфолио'
          front='История'
          back='Мои друзья'
        />
        <MainSection
          side={this.state.side}
          left='text about my contacts'
          right='text about my work'
          front={<AboutMe />}
          back='text about my friends'
          border=''
          main
        />
        <Footer
          side={this.state.side}
          border='top'
          left='Если я не отвечаю, я сплю ;)'
          right='Моя работа - это я.'
          front='Я видел разное дерьмо...'
          back='Люди, с которыми я работаю тащат!'
        />
      </TheCubeWrapper>
    )
  }
}

export default withRouter(TheCube)
