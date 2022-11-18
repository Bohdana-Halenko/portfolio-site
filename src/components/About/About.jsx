import React from 'react';
import './About.scss';

const About = () => (
    <div className='about container'>
        <div className='about__box'>
            
            <div className='about__row'>
                <div className='about__tech'>
                    <div className='about__tech-box'>
                        <div className='about__tech-count'>80%</div>
                        <p className='about__tech-name'>HTML</p>
                        <div className='about__bars'>
                            <div className='about__bar'></div>
                        </div>
                    </div>
                    <div className='about__tech-box'>
                        <div className='about__tech-count'>70%</div>
                        <p className='about__tech-name'>CSS</p>
                        <div className='about__bars'>
                            <div className='about__bar'></div>
                        </div>
                    </div>
                    <div className='about__tech-box'>
                        <div className='about__tech-count'>65%</div>
                        <p className='about__tech-name'>JavaScript</p>
                        <div className='about__bars'>
                            <div className='about__bar'></div>
                        </div>
                    </div>
                    <div className='about__tech-box'>
                        <div className='about__tech-count'>60%</div>
                        <p className='about__tech-name'>React</p>
                        <div className='about__bars'>
                            <div className='about__bar'></div>
                        </div>
                    </div>
                </div>

                <div className='about__box-me'>
                    <h2 className='about__title'>About me</h2>
                    <p className='about__box-text'>
I am a Front-end Developer and master HTML5, CSS3, JavaScript, React, Node.js. I have experience with implementing both individual and team projects. I'm always open to learning about new opportunities. It's important to me to grow as a Full-stack developer and put into practice my knowledge in all stack.</p>
                </div>
            </div>
        </div>
    </div>
);


export default About;