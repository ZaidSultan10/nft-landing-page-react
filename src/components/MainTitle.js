import React from 'react'
import styled from 'styled-components'
import SmallHeadings from './SmallHeadings.js'

const MainTitle = ({title,subTitle,paragraph}) => {
    return (
        <MainTitleStyled>
            <SmallHeadings title={'All Entreprenuers'} />
            <h2>
                {title}
            </h2>
            <p>
                {paragraph}
            </p>
        </MainTitleStyled>
    )
}

const MainTitleStyled = styled.div`
    h2{
        padding-top:1rem;
        font-weight:500;
    }

    p{
        padding:1.2rem 0;
        opacity:0.5;
    }
`

export default MainTitle
