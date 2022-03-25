import React from 'react'
import { BtnPrimary, Input } from '../style/styles'

const Searchbar = () => {
  return (
    <div>
      <BtnPrimary p='6px' mr='2px'>Buscar</BtnPrimary>
      <Input bc="#6d6d6d" placeholder='Buscar tu personaje...'/>
    </div>
  )
}

export default Searchbar