import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
    *{
        margin:0;
        padding:0;
        font-family: 'Roboto', sans-serif;
        box-sizing:border-box;
    }
    body{
        background-color: ${(props)=>props.TemaClaro.background};
        color: ${(props)=>props.TemaClaro.fontcolor};
    }
    a{
        text-decoration: none;
        color: ${(props)=>props.TemaClaro.fontcolor};
    }
`

export const BtnPrimary = styled.button`
    width:${(props)=>props.wdt};
    background-color: #33B8FF;
    background-color: ${(props)=>props.bc};
    color: #fff;
    border:none;
    font-size:${(props)=>props.fz};
    padding:5px;
    padding: ${(props)=>props.p};
    border-radius:5px;
    border-radius: ${(props)=>props.br};
    margin-right:${(props)=>props.mr};
    margin-left:${(props)=>props.ml};
    margin-top:${(props)=>props.mt};
    margin-bottom:${(props)=>props.mb};
    cursor:pointer;
`

export const Input = styled.input`
    border:none;
    border-radius:5px;
    padding:5px;
    padding: ${(props)=>props.p};
    border-radius: ${(props)=>props.br};
    margin-right:${(props)=>props.mr};
    margin-left:${(props)=>props.ml};
    margin-top:${(props)=>props.mt};
    margin-bottom:${(props)=>props.mb};
    background-color:${(props)=>props.bg};
    border:1px solid ${(props)=>props.bc};
`

export const Main = styled.main`
    background-color: ${(props)=>props.bg};
    font-size:${(props)=>props.fz};
    text-align:center;
    margin-right:${(props)=>props.mr};
    margin-left:${(props)=>props.ml};
    margin-top:${(props)=>props.mt};
    margin-bottom:${(props)=>props.mb};
`
export const Parrafo = styled.p`
    font-size: ${(props)=>props.fz};
    font-weight:${(props)=>props.fw};
    letter-spacing: ${(props)=>props.lesp};
    color: ${(props)=>props.fc};
    margin-right:${(props)=>props.mr};
    margin-left:${(props)=>props.ml};
    margin-top:${(props)=>props.mt};
    margin-bottom:${(props)=>props.mb};
`

export const Container = styled.div`
    background-color: ${(props)=>props.bg};
    font-size:${(props)=>props.fz};
    margin-right:${(props)=>props.mr};
    margin-left:${(props)=>props.ml};
    margin-top:${(props)=>props.mt};
    margin-bottom:${(props)=>props.mb};
    padding:10px;
    display:grid;
    grid-template-columns: repeat(1, 1fr);

    @media(min-width:600px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(min-width:1080px){
        grid-template-columns: repeat(2, 1fr);
    }
`
export const Card = styled.div`
    background-color: ${(props)=>props.bg};
    font-size:${(props)=>props.fz};
    margin-right:${(props)=>props.mr};
    margin-left:${(props)=>props.ml};
    margin-top:${(props)=>props.mt};
    margin-bottom:${(props)=>props.mb};
    border-radius:10px;
    box-shadow:0px 0px 5px 0 #171717;
    @media(min-width:1040px){
    display:flex;
    }
`
export const Personaje = styled.img`
    border-radius:10px 10px 0 0;
    width:100%;
    height:20rem;
    @media(min-width:1040px){
        width:15rem;
        height:auto;
        border-radius:10px 0 0 10px;
    }
`

export const Info = styled.div`
    padding:20px;
`

export const NavLinkA = styled.p`
    text-decoration: none;
    font-weight: 600;
    padding:15px;
`
export const Navegador = styled.div`
    display:flex;
    justify-content: space-between;
    padding:10px 20px;
`
export const Rutas = styled.div`
    display:flex;
`

export const AddFavorite = styled.button`
    height:45px;
    font-size:30px;
    border:none;
    background-color: transparent;
    cursor:pointer;
    border-radius:50%;
    margin-left:19rem;
`