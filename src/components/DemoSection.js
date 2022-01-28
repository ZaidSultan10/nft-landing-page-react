import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../Layouts'
import MainTitle from './MainTitle'
import person from '../img/person.jpg';
import person2 from '../img/bitcoin3.jpg';
import person3 from '../img/person3.jpg';
import avatar from '../img/avata.jpg';
import GradientCard from './GradientCard';
import CtaButton from './CtaButton';

const DemoSection = () => {

    const cardData = [{
        image:person,
        avatar:avatar,
        name:'Joey Clark',
        price:'0.067 ETH',
        title:'Among Successfull Sellers',
    },{
        image:person2,
        avatar:avatar,
        name:'Joey Clark',
        price:'0.067 ETH',
        title:'Among Successfull Sellers',
    },{
        image:person3,
        avatar:avatar,
        name:'Joey Clark',
        price:'0.067 ETH',
        title:'Among Successfull Sellers',
    },]
    const ctaButton = <CtaButton name={'Make Bid'} />
    return (
        <DemoSectionStyled>
            <SectionStyled>
                <div className='title-con'>
                    <MainTitle title={'Live Demonstration'} subTitle={'Live Demonstration'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'} />
                </div>
                <div className='gradient-cards-con'>
                    {
                        cardData.map((item) => (
                            <GradientCard image={item.image} name={item.name} price={item.price} avatar = {item.avatar} title={item.title} ctaButton = {ctaButton} />
                        ))
                    }
                </div>
            </SectionStyled>
        </DemoSectionStyled>
    )
}

const DemoSectionStyled = styled.div`

`

export default DemoSection
