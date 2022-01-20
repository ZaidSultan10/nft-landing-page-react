import React from 'react'
import styled from 'styled-components'
import Business from '../img/marketing.mp4'

const MainArea = () => {
    return (
        <MainAreaStyled>
            <video src={Business} muted playsInline loop autoPlay></video>
        </MainAreaStyled>
    )
}

const MainAreaStyled = styled.div`
    width:100%;
    height:85vh;
    position:relative;
    overflow:hidden;
`;

export default MainArea
