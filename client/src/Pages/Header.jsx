import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WidthScreen from "./ScreenWidth";

const Header = () => {
    const [toggleBtn, setToggleBtn] = useState(false);
    const { screenWidth } = WidthScreen()

    const handleToggle = () => {
        setToggleBtn(!toggleBtn);
    };

    useEffect(() => {
        const handleScroll = () => {
            const headerContainer = document.querySelector('.header-container');
            if (window.scrollY > 150 && screenWidth > 768) {
                headerContainer.style.backgroundColor = '#FAF9F6';
                headerContainer.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
            } else if (window.scrollY < 150 && screenWidth > 768){
                headerContainer.style.backgroundColor = 'transparent';
                headerContainer.style.boxShadow = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="Header">
            {screenWidth > 768 ? (
                <div className="header-container">
                    <img src="logoMay.png" alt="Logo" />
                    <div className="links">
                        <Link to='/'>Accueil</Link>
                        <Link to='/services'>Nos Services</Link>
                        <Link to='/prices'>Nos Tarifs</Link>
                        <Link to='/about'>Qui Sommes Nous ?</Link>
                        <button className="link-btn"><Link to='/contact'>Contact</Link></button>
                    </div>
                </div>
            ) : (
                <>
                    {toggleBtn ?
                    <>
                        <div className="header-container">
                            <button onClick={handleToggle} value={toggleBtn} className="toggle-btn">|||</button>
                            <img src="logoMay.png" alt="Logo" />
                            <div className="links">
                                <Link to='/'>Accueil</Link>
                                <Link to='/services'>Nos Services</Link>
                                <Link to='/prices'>Nos Tarifs</Link>
                                <Link to='/about'>Qui Sommes Nous ?</Link>
                                <Link to='/contact'><button className="link-btn">Contact</button></Link>
                            </div>
                        </div>
                        </>
                        :
                        <div className="btn-off">
                        <button onClick={handleToggle} value={toggleBtn} className="toggle-btn2">|||</button>
                        <img style={{padding : '15px'}} src="logoMay.png" alt="Logo" />
                        </div>
                    }
                </>
            )}
        </div>
    );
}

export default Header;