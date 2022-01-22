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
                {navLinks.map((link) => {
                    <li><a href='#'>{link.link}</a></li>
                })}
                <div className='primary-btn'>
                    GET CONNECTED
                </div>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`

`

export default Navigation
