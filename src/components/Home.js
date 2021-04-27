import React from 'react'
import styled from 'styled-components'
import bgImg from '../images/home-background.png'
import Header from './Header'
import ImageSlider from './ImageSlider'

const Home = () => {
    return (
        <Container>
            <Header />
            <ImageSlider />
        </Container>
    )
}
export const Container = styled.div`
    background: url(${bgImg}) center center / cover no-repeat fixed;
    position: relative;
    top: 70px;
    display: block;
    overflow-x: hidden;
    min-height: 500px;
`
export default Home
