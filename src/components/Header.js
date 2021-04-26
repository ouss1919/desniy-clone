import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
const Header = () => {
    return (
        <Container>
            <Nav>
                <Logo>
                    <img src={logo} alt=""/>
                </Logo>
                <Menu>
                    Menu
                </Menu>
            </Nav>
            <SignupButton>
                LOGIN
            </SignupButton>
        </Container>
    )
}

export const Container = styled.nav`
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 40px;
    z-index:3;

    @media (max-width: 768px){
        padding: 15px 20px;

    }
`
export const Nav = styled.div`
    display: flex;
    align-items: center;
`



export const Logo = styled.a`
    width: 100px;
    margin-right: 25px;
    height: auto;

    img{
        display: block;
        width: 100%
    }
`

export const Menu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin-right: auto;
    justify-content: flex-end;
    margin-left: 25px;
    position: relative;
    @media (max-width: 768px){
        display: none;
    }
`
export const SignupButton = styled.button`
    width: 100px;
    background-color: transparent;
    color: #f9f9f9;
    height: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    color: hsla(0, 0, 95.3%, 1);
    font-weight: 300;
    border-radius: 4px;
    border: 1px solid #f9f9f9;

    &:hover{
        background-color: #f9f9f9
    }
`     
export default Header
