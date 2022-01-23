import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation.js'
import SmallHeadings from './SmallHeadings.js'

const MainContent = () => {
    return (
        <MainContentStyled>
            <Navigation />
            <div className='content'>
                <div className='left'>
                    <SmallHeadings title={'All Digital Currencies In One Place'} identifier={'Before'} />
                </div>
                <div className='right'>

                </div>
            </div>
        </MainContentStyled>
    )
}

const MainContentStyled = styled.div`
    position:absolute;
    top:0;
    left:50%;
    width:80%;
    height:100%;
    transform:translateX(-50%);
`

export default MainContent
