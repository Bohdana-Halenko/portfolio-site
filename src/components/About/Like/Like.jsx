import React from 'react';
import '../About.scss';
import { ReactComponent as Snorkeling } from '../../../images/snorkeling.svg';
import { ReactComponent as Bicycle } from '../../../images/bicycle.svg';
import { ReactComponent as Travelling } from '../../../images/travelling.svg';
import { ReactComponent as Cooking } from '../../../images/cooking.svg';
import { ReactComponent as Reading } from '../../../images/reading.svg';


const Like = () => (
    <div className='about__like'>
        <h2 className='about__like-title'>Like to Do</h2>

        <div className='colom'>
            <div>
<div className='about__wrap-like'>
            <div className='wrap-svg'>
                <Snorkeling />
            </div>
            <p className='about__like-text'>Snorkeling</p>
        </div>
        <div className='about__wrap-like'>
            <div className='wrap-svg'>
                <Bicycle />
            </div>
            <p className='about__like-text'>Ride a bike</p>
        </div>
        <div className='about__wrap-like'>
            <div className='wrap-svg'>
                <Reading />
            </div>
            <p className='about__like-text'>Read books</p>
        </div> 
            </div>
                    <div className='colom-second'>
            <div className='about__wrap-like'>
            <div className='wrap-svg'>
                <Travelling />
            </div>
            <p className='about__like-text'>Trevel</p>
        </div>
        <div className='about__wrap-like'>
            <div className='wrap-svg'>
                <Cooking />
            </div>
            <p className='about__like-text'>Cook</p>
        </div>
        </div>
        </div>   




    </div>
);


export default Like;