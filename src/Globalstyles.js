import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding :0;
        list-style : none;
        box-sizing : border-box;
    }
    body{
        background-color: lightblue;
        font-family: 'Montserrat', sans-serif;
        font-size:1.2rem;
        font-weight:400;
    }
`

export default GlobalStyles