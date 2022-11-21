import React from 'react';
import './About.scss';
import Tech from "./Tech/Tech";
import Me from "./Me/Me";
import { ReactComponent as Snorkeling } from '../../images/snorkeling.svg';
import { ReactComponent as Bicycle } from '../../images/bicycle.svg';
import { ReactComponent as Travelling } from '../../images/travelling.svg';
import { ReactComponent as Cooking } from '../../images/cooking.svg';
import { ReactComponent as Reading } from '../../images/reading.svg';


const About = () => (
    <div className='about container'>
        <div className='about__box'>
            
            <div className='about__row'>
                <Tech />
                <Me />
            </div>

            <div className='about__row'>
                <div className='about__like'>
                    <h2 className='about__like-title'>Like to Do</h2>
                    <div className='about__wrap-like'>
                        <Snorkeling />
                        <Bicycle />
                        <Travelling />
                        <Cooking />
                        <Reading />
                    </div>
                </div>

                <div className='about__language'>
                    <h2 className='about__language-title'>Language</h2>
                </div>
                
            </div>
        </div>
    </div>
);


export default About;