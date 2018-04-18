import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import CubeSection from './TheCubeSection'
import AboutMe from './AboutMe'

const TheCubeWrapper = styled.div`
  width: 70vh;
`

const Header = styled(CubeSection)`
  height: 100px;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
`

const Footer = styled(CubeSection)`
  height: 100px;
  transition-delay: 0.2s;
`

const MainSection = styled(CubeSection)`
  height: 300px;
  transition-delay: 0.1s;
`

class TheCube extends React.Component {
  render () {
    return (
      <TheCubeWrapper>
        <Header
          side={this.props.side}
          border='bottom'
          left='contact.me'
          right='my.work'
          front='who.am.i'
          back='my.friends'
        />
        <MainSection
          side={this.props.side}
          left='text about my contacts'
          right='text about my work'
          front={<AboutMe />}
          back='text about my friends'
        />
        <Footer
          side={this.props.side}
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

const mapStateToProps = state => ({
  side: state.ui.side,
})

export default connect(mapStateToProps)(TheCube)