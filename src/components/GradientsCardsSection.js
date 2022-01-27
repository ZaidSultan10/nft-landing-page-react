import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../Layouts'
import GradientCard from './GradientCard'
import MainTitle from './MainTitle'
import person from '../img/person.jpg';
import person2 from '../img/bitcoin3.jpg';
import bitcoin2 from '../img/bitcoin2.jpg';
import bitcoin from '../img/bitcoin.jpg';
import person3 from '../img/person3.jpg';
import computer from '../img/computer.jpg';
import avatar from '../img/avata.jpg';
import CtaButton from './CtaButton';


const GradientsCardsSection = () => {

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
    },{
        image:bitcoin2,
        avatar:avatar,
        name:'Joey Clark',
        price:'0.067 ETH',
        title:'Among Successfull Sellers',
    },{
        image:bitcoin,
        avatar:avatar,
        name:'Joey Clark',
        price:'0.067 ETH',
        title:'Among Successfull Sellers',
    },{
        image:computer,
        avatar:avatar,
        name:'Joey Clark',
        price:'0.067 ETH',
        title:'Among Successfull Sellers',
    },{
        image:person,
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
    }]

    return (
        <GradientsCardsSectionStyled>
            <SectionStyled>
                <div className='title-con'>
                    <MainTitle title={'New Upcoming Items'} subtitle={'Discover Upcoming Items'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'} />
                </div>
                <div className='gradient-cards-con'>
                    {
                        cardData.map((item) => (
                            <GradientCard image={item.image} avatar={item.avatar} name={item.name} price={item.price} title={item.title} />
                        ))
                    }
                </div>
            </SectionStyled>
        </GradientsCardsSectionStyled>
    )
}

const GradientsCardsSectionStyled = styled.div`

`

export default GradientsCardsSection
