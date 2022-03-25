import React, { useReducer, useState } from 'react'
import { Info, Parrafo, Card, Personaje, AddFavorite } from '../style/styles'

const Cards = ({personaje}) => {

  const [favorite, setFavorite] = useState(false)

  function handleClick(){
    setFavorite(!favorite)
  }
  
  return (
    <div>
          <Card bg='#4C4D53' mb='20px' ml='20px' mt='20px' mr='20px'>
            <Personaje src={personaje.image} alt={personaje.name}/>
            <Info>
                <Parrafo fz='25px' fw='900' fc='#fff'>{personaje.name}</Parrafo>
                <Parrafo fz='15px' fw='600' fc='#fff'>🔅{personaje.status} - {personaje.species}</Parrafo>
                <Parrafo fc='#7E7F80' fw='600' fz='14px' mt='20px'>Last know location:</Parrafo>
                <Parrafo fc='#fff' mt='10px'>{personaje.location.name}</Parrafo>
                <Parrafo fc='#7E7F80' fw='600' fz='14px' mt='20px'>Origin:</Parrafo>
                <Parrafo fc='#fff' mt='10px'>{personaje.origin.name}</Parrafo>
                <div className='item' key={personaje.id}>
                  <AddFavorite onClick={() => handleClick()}>{favorite ? '💖' : '🖤'}</AddFavorite>
                </div>
            </Info>
        </Card>
    </div>
  )
}

export default Cards