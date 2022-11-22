import React from 'react';
import './Contacts.scss';

import { ReactComponent as Location } from '../../images/location.svg';
import { ReactComponent as Email } from '../../images/email.svg';
import { ReactComponent as Linkedin } from '../../images/linkedin.svg';
import { ReactComponent as Github } from '../../images/github.svg';




const Contacts = () => (
    <div className='about container' id="contacts">
        <div className='about__box'>
            <h2>Contact me</h2>
            <ul className="contact__block">
                <div>
                    <li className="contact__item">
                        <a href="https://goo.gl/maps/7hFajcEn7fnV6V1a7" className="contact__link">
                            <div className="contact__item-icon-wrapper">
                                <Location />
                            </div>
                            <div>
                                <p>Address</p>
                                <p className="contact__text">Chernihiv, Ukraine</p>
                            </div>
                        </a>
                    </li>
                    <li className="contact__item">
                        <a href="halenkobohdana@gmail.com" className="contact__link">
                            <div className="contact__item-icon-wrapper">
                                <Email />
                            </div>
                            <div>
                                <p className="contact__text">Email Address</p>
                                <p className="contact__text">halenkobohdana@gmail.com</p>
                            </div>    
                        </a>
                    </li>
                </div>
                <div>
                    <li className="contact__item">
                        <a href="https://www.linkedin.com/in/bohdanahalenko/" className="contact__link" >
                            <div className="contact__item-icon-wrapper">
                                <Linkedin />
                            </div>
                            <div>
                                <p>Linkedin</p>
                                <p className="contact__text">Bohdana Halenko | LinkedIn</p>
                            </div>   
                        </a>
                    </li>
                    <li className="contact__item">
                        <a href="https://github.com/Bohdana-Halenko" className="contact__link" >
                            <div className="contact__item-icon-wrapper">
                                <Github />
                            </div>
                            <div>
                                <p className="contact__text">GitHub</p>
                                <p className="contact__text">Bohdana-Halenko</p>
                            </div>
                            
                        </a>
                    </li>
                </div>
                
            </ul>
        </div>
    </div>
);


export default Contacts;