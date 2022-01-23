import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation.js'
import SmallHeadings from './SmallHeadings.js'
import blockchain from '../img/bchain.png'
import CtaButton from './CtaButton'

const MainContent = () => {

    const paraTexts = [{
        text:'All NFTs You Need In One Marketplace'
    },{
        text:'The Best Place To Collect'
    },{
        text:'Buy And Sell'
    },{
        text:'Awesome NFTs'
    }]

    const buttons = [{
        text:'Discover More'
    },{
        text:'Get Help'
    }]
    return (
        <MainContentStyled>
            <Navigation />
            <div className='content'>
                <div className='left'>
                    <SmallHeadings title={'All Digital Currencies In One Place'} identifier={'Before'} />
                    <h2>{paraTexts[0].text}
                    {paraTexts[1].text} , {paraTexts[2].text} <span className='GradientText'>
                        {paraTexts[3].text}    
                    </span> </h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className='btns-con'>
                        {buttons.map((text)=>(
                            <CtaButton name={text.text} />
                        ))}
                    </div>
                </div>
                <div className='right'>
                    <img src={blockchain} alt='' />
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
    padding:1% 0;

    .content{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        height:100%;
        width:100%;

        .btns-con{
            margin-top:1rem;
        }

        .left{
            margin-bottom:50px;
            display:flex;
            justify-content:center;
            flex-direction:column;

            h2{
                padding:1.8rem 0;
            }

            p{
                font-size:14px;
            }
        }
        .right{
            margin-bottom:50px;
            img{
                position:absolute;
                right:-11%;
                bottom:6%;
                width:60%;
            }
        }
    }
`

export default MainContent
