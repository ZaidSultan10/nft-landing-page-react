import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../Layouts.js'
import MainTitle from './MainTitle.js'
import SellerCards from './SellerCards.js'
import BlogSections from './BlogSections.js'


const BodyContent = () => {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <div className='title-heading'>
                    <MainTitle title={'Top Sellers This Month'}
                    subTitle={'All Entreprenuers'} />
                </div>
                <div className='sellerCards'>
                    <SellerCards />
                    <SellerCards />
                    <SellerCards />
                </div>
                <BlogSections />
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
    .title-heading{
        margin-left:3%;
    }
`

export default BodyContent
