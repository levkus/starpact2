import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Slider from "react-slick";
import * as portfolioActions from '../store/portfolio'
import Item from './Item'

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: center;
`

class Works extends React.Component {
  componentDidMount () {
    this.props.portfolioActions.getItems()
  }

  renderItems = () => {
    const { items } = this.props
    return items.map(item => {
      const thumb = `${process.env.REACT_APP_IMAGES}${item.thumbnail}`
      const year = moment(item.date).year()
      return (
        <Item
          key={item.slug}
          thumb={thumb}
          name={item.name}
          lead={item.lead}
          year={year}
          link={item.link}
          techs={item.techs}
        />
      )
    })
  }
  
  render () {
    const settings = {
      dots: false,
      infinite: false,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <CarouselContainer>
        <Slider {...settings}>
          {this.renderItems()}
        </Slider>
      </CarouselContainer>
    )
  }
}

const mapStateToProps = state => ({
  items: state.portfolio.items,
})

const mapDispatchToProps = dispatch => ({
  portfolioActions: bindActionCreators(portfolioActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Works)
