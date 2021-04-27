import React from 'react'
import styled from 'styled-components'
import viewer1 from '../images/viewers-disney.png'
import viewer2 from '../images/viewers-marvel.png'
import viewer3 from '../images/viewers-national.png'
import viewer4 from '../images/viewers-pixar.png'
import viewer5 from '../images/viewers-starwars.png'
const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src={viewer1} alt=""/>
            </Wrap>
            <Wrap>
                <img src={viewer2} alt=""/>
            </Wrap>
            <Wrap>
                <img src={viewer3} alt=""/>
            </Wrap>
            <Wrap>
                <img src={viewer4} alt=""/>
            </Wrap>
            <Wrap>
                <img src={viewer5} alt=""/>
            </Wrap>
        </Container>
    )
}
const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.025, 0.46, 0.45, 0.94);
    border: 3px solid rgba(249, 249, 249, 0.1);
    img{
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: contain;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0;
        width: 100%;
        z-index: 1;
        top: 0;
    }
`

const Container = styled.div`
    margin-top: 30px;
    padding: 30px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`
export default Viewers
