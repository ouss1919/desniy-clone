import React, { useEffect } from 'react'
import styled from 'styled-components'
import { setMovies } from '../features/moviesSlice'
import db from '../firebase'
import bgImg from '../images/home-background.png'
import Header from './Header'
import ImageSlider from './ImageSlider'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Recommends from './Recommends'
import Trending from './Trending'
import Viewers from './Viewers'
import { useDispatch } from 'react-redux'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(()  => {
            let recommends = [];
            let originals = [];
            let trending = [];
            let newDisney = [];
            db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                console.log(doc.data())
                switch(doc.data().type){
                    case 'recommend' :
                        recommends = [...recommends, {id: doc.id, ...doc.data()}]
                        break;
                    case 'trending' :
                        trending = [...trending, {id: doc.id, ...doc.data()}]
                        break;
                    case 'original' :
                        originals = [...originals, {id: doc.id, ...doc.data()}]
                        break;
                    case 'new' :
                        newDisney = [...newDisney, {id: doc.id, ...doc.data()}]
                        break;
                }
            })
            dispatch(setMovies({
                recomanded : recommends,
                newDisney : newDisney,
                original : originals,
                trending : trending
            }))
        })
    }, [])
    return (
        <Container>
            <Header />
            <ImageSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
}
export const Container = styled.div`
    background: url(${bgImg}) center center / cover no-repeat fixed;
    position: relative;
    top: 70px;
    padding: 20px 60px;
    display: block;
    overflow-x: hidden;
    min-height: 500px;
    @media (max-width: 768px){
        padding: 10px 30px;
    }
`
export default Home
