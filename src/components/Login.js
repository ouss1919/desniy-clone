import React from 'react'
import styled from 'styled-components'
import backgroundImg from '../images/login-background.jpg'
import headImg from '../images/cta-logo-one.svg'
import footerImg from '../images/cta-logo-two.png'
import Header from './Header'

const Login = () => {
    return (
        <Container>
            <Header />
            <Content>
                <HeaderImg src={headImg} />
                <ButtonContent>
                    GET ALL THERE
                </ButtonContent>
            <DescriptionContent>
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 26/04/2021, the price of Disney+ and the Disney Bundle will increase by 1$. 
            </DescriptionContent>
            <FooterImg src={footerImg} />
            </Content>
        </Container>
    )
}
export const Container = styled.section`
    overflow: hidden;
    display: flex;
    justify-content: center;
    height: 100vh;
    background-image: url(${backgroundImg});
    background-position: center;
    background-size: cover;
    z-index : -1;
`
export const Content = styled.div`
    margin-bottom: 10vw;
    height: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    padding: 80px 40px;
    max-width: 650px;
`

export const HeaderImg = styled.img`
    width: 92% ;
    margin-bottom: 12px;
`
export const ButtonContent = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    cursor: pointer;
    border-radius: 4px;
    letter-spacing: 1.5px;
    font-size: 18px;
    text-align: center;
    font-weight: 800;
    width: 100%;
    &:hover{
        background-color: #0483ee;
    }
`

export const DescriptionContent = styled.p`
    color: hsla(0, 0, 95.3%, 1);
    text-align: center;
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;

`

export const FooterImg = styled.img`
    width: 100% ;
    height: auto;
    `
export default Login
