import React from 'react'
import ContentContainer from './ContentContainer'
import styled from 'styled-components'

const Side = styled.div`
  opacity: ${props => props.active ? 1 : 0.3};
  color: ${props => props.active ? '#c2deff' : 'rgba(0, 0, 0, 0)'};
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s, color 0.7s ease-out;
  background-image: ${props => props.main ? 'radial-gradient(circle at top, rgba(35, 28, 37, 0.7) 20%, rgba(35, 28, 37, 0) 60%)' : 'none'};
  background-position: top center;

  &:before {
    position: absolute;
    display: ${props => props.border.indexOf('top') > -1 ? 'block' : 'none'};
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(to left, transparent, rgba(255, 255, 255, 0.5) 50%, transparent);
  }

  &:after {
    position: absolute;
    display: ${props => props.border.indexOf('bottom') > -1 ? 'block' : 'none'};
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(to left, transparent, rgba(255, 255, 255, 0.5) 50%, transparent);
  }
`

const Left = styled(Side)`
  transform: rotateY(120deg) translateZ(200px);
  /* background: rgba(255,0,255,0.5); */
`

const Front = styled(Side)`
  transform: rotateY(0deg) translateZ(200px);
  /* background: rgba(0, 255, 255, 0.5); */
`

const Right = styled(Side)`
  transform: rotateY(-120deg) translateZ(200px);
  /* background: rgba(255, 255, 0, 0.5); */
`

const Section = styled.div`
  width: 100%;
  transform-style: preserve-3d;
  will-change: transform;
  transform: rotateY(${props => {
    switch (props.side) {
      case 'left':
        return '-120deg'
      case 'front':
        return '0deg'
      case 'right':
        return '120deg'
      default:
        return '0deg'
    }
  }});
  transition: transform 0.7s;
`

const CubeSection = ({ className, border, side, left, front, right, back, main }) => (
  <Section side={side} className={className}>
    <Left main={main} border={border} active={side === 'left'}>
      <ContentContainer>
        {left}
      </ContentContainer>
    </Left>
    <Front main={main} border={border} active={side === 'front'}>
      <ContentContainer>
        {front}
      </ContentContainer>
    </Front>
    <Right main={main} border={border} active={side === 'right'}>
      <ContentContainer>
        {right}
      </ContentContainer>
    </Right>
  </Section>
)

export default CubeSection
