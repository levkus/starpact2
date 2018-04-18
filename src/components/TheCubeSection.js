import React from 'react'
import styled from 'styled-components'

const Side = styled.div`
  opacity: ${props => props.active ? 1 : 0.2};
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s;

  &:before {
    position: absolute;
    display: ${props => props.border === 'top' ? 'block' : 'none'};
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.5) 50%, transparent);
  }

  &:after {
    position: absolute;
    display: ${props => props.border === 'bottom' ? 'block' : 'none'};
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.5) 50%, transparent);
  }
`

const Left = styled(Side)`
  transform: translateX(150px) rotateY(90deg);
`

const Front = styled(Side)`
  transform: translateZ(150px);
`

const Right = styled(Side)`
  transform: translateX(-150px) rotateY(270deg);
`

const Back = styled(Side)`
  transform: translateZ(-150px) rotateY(180deg);
`

const Section = styled.div`
  width: 100%;
  transform-style: preserve-3d;
  transform: rotateY(${props => {
    switch (props.side) {
      case 'left':
        return '-90deg'
      case 'front':
        return '0deg'
      case 'right':
        return '90deg'
      case 'back':
        return '180deg'
      default:
        return '0deg'
    }
  }});
  transition: transform 0.5s;
`

const CubeSection = ({ className, border, side, left, front, right, back }) => (
  <Section side={side} className={className}>
    <Left border={border} active={side === 'left'}>{left}</Left>
    <Front border={border} active={side === 'front'}>{front}</Front>
    <Right border={border} active={side === 'right'}>{right}</Right>
    <Back border={border} active={side === 'back'}>{back}</Back>
  </Section>
)

export default CubeSection
