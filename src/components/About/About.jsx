import React from 'react';
import './About.scss';
import Tech from "./Tech/Tech";
import Me from "./Me/Me";
import Like from "./Like/Like";
import Language from "./Languag/Language";


const About = () => (
    <div className='about container'>
        <div className='about__box'>
            <div className='about__row'>
                <Tech />
                <Me />
            </div>

            <div className='about__row-me'>
                <Like />
                <Language />
            </div>
        </div>
    </div>
);


export default About;