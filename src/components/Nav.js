import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import styled from 'styled-components'

const NavWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 100;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
  bottom: 20px;
  width: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-flow: column;
`

const StyledLink = styled(Link)`
  display: block;
  padding: 0;
  background: transparent;
  color: ${props => props.active ? '#fff' : '#c2deff'};
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: color 0.3s;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: #fff;
  }

  &:focus {
    outline: none;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

class Nav extends React.Component {
  render () {
    const { section } = this.props.match.params
    return (
      <NavWrapper>
        <StyledLink to='/story' active={section === 'story'}>История</StyledLink>
        <StyledLink to='/portfolio' active={section === 'portfolio'}>Портфолио</StyledLink>
        <StyledLink to='/contact' active={section === 'contact'}>Связь</StyledLink>
      </NavWrapper>
    )
  }
}

export default withRouter(Nav)
