import React from 'react'
import styled from 'styled-components'
import time from '../img/time.svg';
import heart from '../img/heart.svg';

const GradientCard = ({image,avatar,name,price,title}) => {
    return (
        <GradientCardStyled>
            <div className='g-card'>
                <div className='inner-content'>
                    <div className='image'>
                        <img src={image} alt='' />
                        <div className='name'>
                            <img src={avatar} alt='' />
                            <p>{name}</p>
                        </div>
                    </div>
                    <div className='card-content'>
                        <h6 className='card-name'>
                            {title}
                        </h6>
                        <p>Price <span className='price'>{price}</span>&nsbsp;&nsbsp;<span className='l-text'>3 Of 15</span></p>
                        <p>Highest Bid : &nsbsp; <span className='price'>{price}</span></p>
                        <div className='duration'>
                            <p><img src={time} alt='' /></p>
                            <p><img src={heart} alt='' /></p>
                        </div>
                    </div>
                </div>
            </div>
        </GradientCardStyled>
    )
}

const GradientCardStyled = styled.div`
    border-radius:20px;
    font-size: 1rem;
    transition: all .4s ease-in-out;

    .g-card{
        margin:2rem;
        .inner-content{
            background-color:#091026;
            padding: 0.8rem;
            border-radius: 20px;

            .image{
                width:100%;
                position:relative;
                img:first-child{
                    width:100%;
                    object-fit:cover;
                    height:300px;
                    border-radius:10px;
                }

                .name{
                    position:absolute;
                    left:50%;
                    bottom:-26px;
                    background-color:#03091F;
                    display:flex;
                    align-items:center;
                    transform: translateX(-50%);
                    width:75%;
                    padding:0.5rem;
                    border:1px solid rgba(255,255,255,0.8);

                    img{
                        width:45px;
                        height:45px;
                        border-radius:50%;
                        object-fit:cover;
                        margin-right:2rem;
                    }
                }
            }

            .card-content{
                padding-top:3rem;

                .card-title{
                    font-size:1.3rem;
                    font-weight:500;
                    padding-bottom:0.6rem;
                }

                .price{
                    color: #6BBE92;
                }

                .l-text{
                    opactiy:0.5;
                }

                .duration{
                    margin-top: 1rem;
                    padding-top: 1rem;
                    border: 1px dashed rgba(255,255,255,0.2);
                    display:flex;
                    justify-content:space-between;

                    p{
                        display:flex;
                        align-items:center;

                        img{
                            object-fit:cover;
                            width:18px;
                            margin-right:.6rem;
                            align-items"center;
                            display:flex;
                            justify-content:center;
                        }
                    }
                }
            }
        }
    }
`

export default GradientCard
