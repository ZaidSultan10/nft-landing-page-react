import React from 'react'
import styled from 'styled-components'
import Business from '../img/marketing.mp4'

const MainArea = () => {
    return (
        <MainAreaStyled>
            <video src={Business}></video>
        </MainAreaStyled>
    )
}

const MainAreaStyled = styled.div`

`;

export default MainArea
