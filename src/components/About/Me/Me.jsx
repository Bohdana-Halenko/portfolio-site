import React from 'react';
import '../About.scss';

const Me = () => (
                <div className='about__box-me'>
                    <h2 className='about__title'>About me</h2>
                    <div className='color-box'>
                        <div className='color-dots'>
                            <div className='red'></div>
                            <div className='yellow'></div>
                            <div className='green'></div>
                        </div>
                        <div className='about__box-text'>
                            <span>Hi everybody :)</span>
                            <p className='about__text'> 👋 I'm a Front-end Developer and master HTML5, CSS3, JavaScript, React, Node.js.
                            I have experience with implementing both individual and team projects.
                            I'm always open to learning about new opportunities.
                            It's important to me to grow as a Full-stack developer and put into practice my knowledge in all stack.
                        </p>
                        </div>
                    </div>  
                </div>
);


export default Me;