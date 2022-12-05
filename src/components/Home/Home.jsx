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
                <div className="text3d-wrap-1">
                    <h1 className='text3d-1'>Hello, I'm Bohdana</h1>
                </div>
                
                <h2 className='text-typing title'> Front-End Developer</h2>
                
                <button className='resume-btn'>
                    <a className='home__button-text' href="/#portfolio">View my works</a>
                </button>
            </div>
        </div>       
    </div>
);


export default Home;