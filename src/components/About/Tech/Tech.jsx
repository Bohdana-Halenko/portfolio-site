import React from 'react';
import '../About.scss';


const Tech = () => (
    <div className='about__tech'>
                    <div className='about__tech-box'>
                        <div className='wrapp'>
                            <p className='about__tech-name'>HTML</p>
                            <div className='about__tech-count'>80%</div>
                        </div>
                        <div className='about__bars'>
                            <div className='about__bar html' style={{width:'80'}}></div>
                        </div>
                    </div>
                    <div className='about__tech-box'>
                        <div className='wrapp'>
                            <p className='about__tech-name'>CSS</p>
                            <div className='about__tech-count'>75%</div>
                        </div>
                        <div className='about__bars'>
                            <div className='about__bar css'></div>
                        </div>
                    </div>
                    <div className='about__tech-box'>
                        <div className='wrapp'>
                            <p className='about__tech-name'>JavaScript</p>
                            <div className='about__tech-count'>65%</div>
                        </div>
                        <div className='about__bars'>
                            <div className='about__bar js'></div>
                        </div>
                    </div>
                    <div className='about__tech-box'>
                        <div className='wrapp'>
                            <p className='about__tech-name'>React</p>
                        <div className='about__tech-count'>60%</div>
                        </div>
                        <div className='about__bars'>
                            <div className='about__bar react'></div>
                        </div>
                    </div>
    </div>
);


export default Tech;