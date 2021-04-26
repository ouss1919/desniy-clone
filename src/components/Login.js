import React from 'react'
import styled from 'styled-components'
import backgroundImg from '../images/login-background.jpg'
import logo from '../images/kjdsjhs.png'
const Login = () => {
    return (
        <Container>
            <Content>
                <HeaderContent>
                    <HeaderLogo src={logo} />
                    <HeaderLogo src={logo} />
                    <HeaderLogo src={logo} />
                </HeaderContent>
                <ButtonContent>
                    GET ALL THERE
                </ButtonContent>

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
`
export const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export default Login
