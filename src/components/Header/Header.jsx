import React from 'react';
import './Header.scss';

const Header = () => (
    <div className='header'>
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <a className='nav__link' href="/#">Home</a>
                </li>
                <li className='nav__item'>
                    <a className='nav__link' href="/#">About</a>
                </li>
                <li className='nav__item'>
                    <a className='nav__link' href="/#">Portfolio</a>
                </li>
                <li className='nav__item'>
                    <a className='nav__link' href="/#">Resume</a>
                </li>
                <li className='nav__item'>
                    <a className='nav__link' href="/#">Contacts</a>
                </li>
            </ul>
        </nav>
    </div>
);


export default Header;