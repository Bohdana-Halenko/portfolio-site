import React from 'react';
import './Header.scss';

const Header = () => (
    <div className='header' id="hea">
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <a className='nav__link' href="/#home">Home</a>
                </li>
                <li className='nav__item'>
                    <a className='nav__link' href="/#about">About</a>
                </li>
                <li className='nav__item'>
                    <a className='nav__link' href="/#portfolio">Portfolio</a>
                </li>
                <li className='nav__item'>
                    <a className='nav__link' href="/#resume">Resume</a>
                </li>
                <li className='nav__item'>
                    <a className='nav__link' href="/#contacts">Contacts</a>
                </li>
            </ul>
        </nav>
    </div>
);


export default Header;