import React from 'react';
import '../About.scss';


const Language = () => (
    <div className='about__language'>
        <h2 className='about__language-title'>Language</h2>

        <div>
            <div className='wrapp-language'>
                <p className='about__language-name'>Ukrainian</p>
                <div className='about__language-bars'>
                    <div className='about__language-bar ua'></div>
                </div>
                <div className='about__language-count'>Native</div>
            </div>
            
            
            <div className='wrapp-language'>
                <p className='about__language-name'>English</p>
                <div className='about__language-bars'>
                    <div className='about__language-bar uk'></div>
                </div>
                <div className='about__language-count'>Intermediate</div>
            </div>
            
            
            <div className='wrapp-language'>
                <p className='about__language-name'>Russian</p>
                <div className='about__language-bars'>
                    <div className='about__language-bar ru'></div>
                </div>
                <div className='about__language-count'>Native</div>
            </div>
            
        </div> 
    </div>
);


export default Language;