import React from 'react'
import styled from 'styled-components'

const ThumbContainer = styled.div`
  width: 160px;
  flex-shrink: 0;
`

const Thumb = styled.img`
  width: 100%;
`

const ItemContainer = styled.div`
  display: flex;
  padding: 0 20px;
`

const TextContainer = styled.div`
  padding-left: 20px;
`

const Name = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 10px;
`

const Date = styled.div`
  opacity: 0.5;
  font-size: 0.8em;
  margin-bottom: 10px;
`

const Link = styled.a`
  font-size: 1em;
  display: block;
  color: inherit;
  text-decoration: underline;
  margin-bottom: 10px;
`

const Lead = styled.div`
  margin-bottom: 10px;
`

const Tech = styled.span`
  padding: 1px 2px;
  font-size: 0.8em;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  margin-right: 5px;
  margin-bottom: 5px;

  &:last-child {
    margin-right: 0;
  }
`

const Item = ({ name, year, lead, thumb, link, techs }) => (
  <ItemContainer>
    <ThumbContainer>
      <Thumb src={thumb} alt={name} />
    </ThumbContainer>
    <TextContainer>
      <Name>{name}</Name>
      {link && <Link href={link} target="blank">View live</Link>}
      <Date>{year}</Date>
      <Lead>{lead}</Lead>
      <div>
        {
          techs.map(tech => {
            return <Tech>{tech.name}</Tech>
          })
        }
      </div>

    </TextContainer>
  </ItemContainer>
)

export default Item
