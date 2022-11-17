import React from 'react';
import s from './Header.module.css';

const Header = () => (
    <div>
        <nav>
            <ul className={s.nav__list}>
                <li className={s.nav__item}>
                    <a className={s.nav__link} href="/#">Home</a>
                </li>
                <li className={s.nav__item}>
                    <a className={s.nav__link} href="/#">About me</a>
                </li>
                <li className={s.nav__item}>
                    <a className={s.nav__link} href="/#">Portfolio</a>
                </li>
                <li className={s.nav__item}>
                    <a className={s.nav__link} href="/#">Resume</a>
                </li>
                <li className={s.nav__item}>
                    <a className={s.nav__link} href="/#">Contacts</a>
                </li>
            </ul>
        </nav>
    </div>
);


export default Header;