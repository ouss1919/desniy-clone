import React, { useEffect } from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import home from '../images/home-icon.svg'
import search from '../images/search-icon.svg'
import movie from '../images/movie-icon.svg'
import original from '../images/original-icon.svg'
import series from '../images/series-icon.svg'
import watchlist from '../images/watchlist-icon.svg'
import {auth, provider} from '../firebase';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState} from '../features/userSlice'
const Header = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const username = useSelector(selectUserName)
    const userphoto = useSelector(selectUserPhoto)
    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name : user.displayName,
            email : user.email,
            photo : user.photoURL
        }))
        history.replace('/home')
    }
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user)
            }else{
                history.push('/')
            }
        })
    }, [username])
    const handleAuth = () =>{
                if (username){
                    history.replace('/')
                    auth.signOut();
                    dispatch(
                        setSignOutState()
                    )
                }else{
                    auth.signInWithPopup(provider).then((result) =>{
                        setUser(result.user)
                    }).catch((error) => {
                        alert(error.message)
                    }
                    )
                }

    }
    return (
        <Container>
            <Nav>
                <Logo>
                    <img src={logo} alt=""/>
                </Logo>
                {username ?            
                            <Menu>
                                <a><img src={home} alt=""/><span>Home</span></a>
                                <a><img src={search} alt=""/><span>Search</span></a>
                                <a><img src={watchlist} alt=""/><span>Watchlist</span></a>
                                <a><img src={original} alt=""/><span>Original</span></a>
                                <a><img src={movie} alt=""/><span>Movie</span></a>
                                <a><img src={series} alt=""/><span>Series</span></a>
                            </Menu>
                            :
                            <> </>
                }
            </Nav>
            {username ? 
                <Signout>
                    <img src={userphoto} alt=""/>
                    <span>{username}</span>
                    <DropDown  onClick={handleAuth}>Sign Out</DropDown>
                </Signout>
                : 
            <SignupButton onClick={handleAuth}>
                LOGIN
            </SignupButton>
        }
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
    cursor: pointer;
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

a{
        color: rgb(249, 249, 249);
        display: flex;  
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img{
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }
        span{
        letter-spacing: 1.42px;
        position: relative;
        line-height: 1.08px;
        padding: 0 2px;
        white-space: nowrap;
        font-size: 16px;
        &:before{
            content: '';
            background-color: rgb(249, 249, 249);
            border-radius : 0 0 4px 4px ;
            bottom: -12px;
            height: 2px;
            opacity: 0;
            position: absolute;
            right: 0;
            left: 0;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
        }
    }
    &:hover{
        span:before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
            }
        }
}
`
export const SignupButton = styled.a`
    padding: 8px 16px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    letter-spacing: 1.5px;
    color: hsla(0, 0, 95.3%, 1);
    border-radius: 4px;
    cursor: pointer;
    transition: all .2s;
    border: 1px solid #f9f9f9;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`
export const DropDown = styled.div`
    position: absolute;
    top: 40px;
    right: 50px;
    width: 200px;
    text-align: center;
    background-color: rgb(19, 19, 19);
    letter-spacing: 1.5px;
    color: hsla(0, 0, 95.3%, 1);
    border-radius :4px;
    z-index: 6;
    padding: 10px;
    border: 1px solid rgb(151, 151, 151);
    font-size: 14px;
    letter-spacing: 3px;
    opacity: 0;
    @media (max-width: 768px){
        right: 50px;
        width: auto;
        top: 30px;
    }
    `
export const Signout = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%
    }
    span{
        font-size: 16px;
        margin-left: 20px;
        @media (max-width: 768px){
            display: none
        }
    }
    &:hover{
        ${DropDown}{
            opacity: 1;
            transition-duration: 1s;
        }
    }
`  

export default Header
