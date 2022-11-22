import React from 'react';
import './About.scss';
import Tech from "./Tech/Tech";
import Me from "./Me/Me";
import Like from "./Like/Like";
import Language from "./Languag/Language";


const About = () => (
    <div className='about container' id="about">
        <div className='about__box'>
            <div className='about__row'  data-aos='fade-right'>
                <Tech />
                <Me />
            </div>

            <div className='about__row-me' data-aos="fade-left">
                <Like />
                <Language />
            </div>
        </div>
    </div>
);


export default About;