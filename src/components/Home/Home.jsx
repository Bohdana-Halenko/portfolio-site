import React from 'react';
import './Home.scss';
import photo from '../../images/photo.jpg';


const Home = () => (
    <div className='container' id="home">
        <div className='home__img background'>
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
        </div>  
        
        <div className='home'>
            <div className='home__box' >
                <img src={photo} alt="User avatar" className='home__photo' />
            </div>

            <div className='home__wrap'>
                <h1 className='home__title title'>Hello, I'm Bohdana</h1>
                <h2 className='home__text title'> Front-End Developer</h2>
                <button className='home__button'>View my works</button>
            </div>
        </div>       
    </div>
);


export default Home;