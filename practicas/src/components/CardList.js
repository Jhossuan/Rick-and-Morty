import React from 'react'
import Cards from './Cards'
import {Container} from '../style/styles'

const CardList = ({characters}) => {
  return (
    <div>
      <Container>
        {characters.map(personaje => (
          <Cards key={personaje.id} personaje={personaje}/>
        ))
        }
      </Container>
    </div>
  )
}

export default CardList