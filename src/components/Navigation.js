import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo2.png'

const Navigation = () => {
    const navLinks = [{
        link:'Home'
    },{
        link:'About'
    },{
        link:'FAQs'
    },{
        link:'Activity'
    },{
        link:'Contact'
    }]
    return (
        <NavigationStyled>
            <div className='logo'>
                <img src={logo} alt='' />
            </div>
            <ul className='nav-items'>
                {navLinks.map((link) => (
                    <li><a href='#'>{link.link}</a></li>
                ))}
                <div className='primary-btn'>
                    GET CONNECTED
                </div>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    min-height:10vh;
    display:flex;
    justify-content:space-between;
    align-items:center;

    .nav-items{
        display:flex;
        align-items:center;
        li{
            margin:0 1rem;
        }
        .primary-btn{
            margin-left:3rem;
            padding: 0.6rem 0.8rem;
            border-radius:70px;
            cursor:pointer;
            transition: all .4s ease-in-out;
            background-color:rgba(57,95,246,0.6);

            &:hover{
                background-color:rgba(57,95,246,1);
            }
        }
    }

    .logo{
        img{
            width:60px;
        }
    }
`

export default Navigation
