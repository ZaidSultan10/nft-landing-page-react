import React from 'react'
import styled from 'styled-components'
import data from '../data.js'

const SellerCards = () => {
    return (
        <SellerCardsStyled>
            {data.map((item) => (
                <div className='sellerCardComp' key={item.id}>
                    <div className='number'>
                        <p>0 {item.id}</p>
                    </div>
                    <div className='profile'>
                        <img src={item.image} alt='' />
                        <div className='name'>
                            <h3>{item.name}</h3>
                            <p>{item.currency}</p>
                        </div>
                    </div>
                </div>
            ))}
        </SellerCardsStyled>
    )
}

const SellerCardsStyled = styled.div`
    border-radius:20px;
    background: rgba(255,255,255,0.03);
    transition:all 0.4s ease-in-out;

    &:hover{
        transform:translateY(-10%);
    }

    .sellerCardComp{
        display:flex;
        align-items:center;
        padding:1.5rem 1rem;

        .number{
            padding-right:1rem;
            font-size:1.6rem;
            opacity:0.5;
            
            p{
                font-weight:700;
            }
        }

        .profile{
            display:flex;

            img{
                width:70px;
                height:70px;
                border-radius:50%;
                margin-right:1rem;
                border:2px solid #395FF6;
                object-fit:cover;
            }
        }
        
    }
`

export default SellerCards
