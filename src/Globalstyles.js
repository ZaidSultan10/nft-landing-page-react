import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding :0;
        list-style : none;
        box-sizing : border-box;
    }
    body{
        background-color: red;
        font-family: 'Montserrat', sans-serif;
    }
`

export default GlobalStyles