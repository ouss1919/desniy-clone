import React, { useEffect, useState } from 'react'
import styled from 'styled-components';     
import playIconBlack from '../images/play-icon-black.png'
import playIconWhite from '../images/play-icon-white.png'
import groupIcon from '../images/group-icon.png'
import Header from './Header';
import { useParams } from 'react-router-dom';
import db from '../firebase';

const Detail = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        db.collection('movies').doc(id)
        .get()
        .then((doc) =>{
            if(doc.exists) {
                setDetail(doc.data());
            }else{
                console.log("no such document in firebase ")
            }
        }).catch((error) => {
            console.log("Error getting document:", error)
        })
    }, [id])
    return (
        
        <Container>
            <Background>
                <img src={detail.backgroundImg} alt={detail.title}/>
            </Background>
            <ImageTitle>
                <img src={detail.titleImg} alt={detail.title}/>
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src={playIconBlack} alt=""/>
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src={playIconWhite}  alt=""/>
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src={groupIcon} alt=""/>
                        </div>
                    </GroupWatch>
                </Controls>
                <Subtitle>
                    {detail.subTitle}
                </Subtitle>
                <Description>
                {detail.description}
                </Description>
            </ContentMeta>
        </Container>
    )
}
const Subtitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin: 30px 0 10px 0;
    
    @media (max-width: 768px){
        font-size: 12px;
    }
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0;
    color: rgb(249, 249, 249);
    
    @media (max-width: 768px){
        font-size: 14px;
    }
`

const  GroupWatch = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
`
const  AddList = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;

    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;

        &:first-child{
            height: 2px;
            transform: translate(1px, 0), rotate(0deg);
            width: 16px; 
        }

        &:nth-child(2){
            height: 16px;
            transform: translate(-8px) rotate(0deg);
            width: 2px;
        }
    }
`

const Player = styled.button`
    font-size: 15px;
    margin: 0 22px 0 0 ;
    padding: 0 24px;
    height: 56px;
    border-radius: 4px;
    align-items: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    background: rgb(249, 249, 249);
    border: none;
    color: rgb(0, 0, 0)

    img{
        width: 32px;
    }

    &:hover{
        background: rgb(198, 198, 198);
    }

    @media(max-width: 768px){
        height: 45px;
        padding: 0 12px;
        font-size: 12px;
        margin: 0 10px 0 0;
        img{
        width: 25px;
    }
    }
`
const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249, 249, 249);
`

const ContentMeta = styled.div`
    max-width: 874px;
`
const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24 0;
    min-height: 56px;
`

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`
const Background = styled.div`
    left: 0;
    opacity: 0.8;
    position: fixed;
    right: 0;
    top: 0;
    z-index: -1;

    img{
        width: 100vw;
        height: 100vh;
        @media (max-width: 768px){
            width: initial;
        }
    }
`
const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    --webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0 auto;
    top: 50px;
    height: auto;
    padding-bottom: 24px;
    width: 100%;
    img{
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }


    img{
        width: 100vw;
        height: 100vh;
        @media (max-width: 768px){
            width: initial;
        }
    }
`
export default Detail
