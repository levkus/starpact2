import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as uiActions from '../store/ui'
import styled from 'styled-components'

const NavWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 100;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
`

const Link = styled.button`
  display: block;
  padding: 0;
  background: transparent;
  color: ${props => props.active ? '#000' : '#999'};
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #000;
  }

  &:focus {
    outline: none;
  }
`

class Nav extends React.Component {
  setSide = (side) => (e) => {
    this.props.uiActions.setSide(side)
  }

  render () {
    const { side } = this.props
    return (
      <NavWrapper>
        <Link active={side === 'front'} onClick={this.setSide('front')}>who.am.i</Link>
        <Link active={side === 'right'} onClick={this.setSide('right')}>my.work</Link>
        <Link active={side === 'left'} onClick={this.setSide('left')}>contact.me</Link>
        <Link active={side === 'back'} onClick={this.setSide('back')}>my.friends</Link>
      </NavWrapper>
    )
  }
}

const mapStateToProps = state => ({
  side: state.ui.side,
})

const mapDispatchToProps = dispatch => ({
  uiActions: bindActionCreators(uiActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)