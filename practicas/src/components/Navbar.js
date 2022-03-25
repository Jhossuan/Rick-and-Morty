import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavLinkA, Navegador, BtnPrimary, Rutas } from '../style/styles'


const Navbar = ({setTemaClaro, temaClaro}) => {
  return (
    <div>
        <Navegador>
            <Rutas>
            <NavLink to='/'><NavLinkA>Home</NavLinkA></NavLink>
            <NavLink to='/about'><NavLinkA>About</NavLinkA></NavLink>
            <NavLink to='/cv'><NavLinkA>Cv</NavLinkA></NavLink>
            </Rutas>
            <div>
                <BtnPrimary bc='transparent' fz='30px' br='50%' wdt='3.2rem' p='5px' onClick={()=>setTemaClaro(!temaClaro)}>{temaClaro ? '🌛' : '🌞'}</BtnPrimary>
            </div>
        </Navegador>
    </div>
  )
}

export default Navbar