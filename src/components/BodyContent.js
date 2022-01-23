import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../Layouts.js'
import MainTitle from './MainTitle.js'
import SellerCards from './SellerCards.js'

const BodyContent = () => {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <MainTitle title={'Top Sellers This Month'}
                subTitle={'All Entreprenuers'} />

                <div className='sellerCards'>
                    <SellerCards />
                    <SellerCards />
                    <SellerCards />
                </div>
            </InnerLayout>
        </BodyContentStyled>
    )
}

const BodyContentStyled = styled.main`
    .sellerCards{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        grid-gap:2rem;
        margin:2rem 0;
    }
`

export default BodyContent
