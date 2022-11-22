import React, { useEffect } from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function App() {
    useEffect(() => {
        AOS.init();
    }, [])
    
    return <div>
        <Header />
        <Home />
        <About />
        <Portfolio />
        <Resume />
        <Contacts />
        <Footer />
    </div> 
}
