import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import CubeSection from './TheCubeSection'
import AboutMe from './AboutMe'
import Works from './Works'
import { convertSectionNameToCubeSide } from './magic'

const TheCubeWrapper = styled.div`
  width: 600px;
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
  text-align: center;
`

const Footer = styled(CubeSection)`
  height: 50px;
  transition-delay: 0.2s;
  font-size: 0.75rem;
  text-align: center;
`

const MainSection = styled(CubeSection)`
  height: 480px;
  transition-delay: 0.1s;
  font-size: 0.75rem;

  @media (max-width: 1280px) {
    height: 360px;
  }
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
        />
        <MainSection
          side={this.state.side}
          left='text about my contacts'
          right={<Works />}
          front={<AboutMe />}
          border=''
          main
        />
        <Footer
          side={this.state.side}
          border='top'
          left='Если я не отвечаю, я сплю ;)'
          right='Моя работа - это я.'
          front='Я видел разное дерьмо...'
        />
      </TheCubeWrapper>
    )
  }
}

export default withRouter(TheCube)
