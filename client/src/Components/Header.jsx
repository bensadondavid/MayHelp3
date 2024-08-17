import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ()=>{

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(()=>{
        const changeWidth = ()=>{
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', changeWidth)

        return ()=>{
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    const [hamBtn, setHambtn] = useState(false)
    const ToggleBtn = ()=>{
        setHambtn(!hamBtn)
    }

    useEffect(()=>{
        const header = document.querySelector('.header')
        const changeBg = ()=>{
            if(screenWidth > 768){
                if(window.scrollY < 150){
                    header.style.backgroundColor = 'transparent'
                }
                else if(window.scrollY >= 150){
                    header.style.backgroundColor = '#002244'
                }
            }
        }
        window.addEventListener('scroll', changeBg)

        return ()=>{
            window.removeEventListener('scroll', changeBg)
        }
    })

    const scrollToContact = () => {
        document.getElementById("footer").scrollIntoView({
          behavior: "smooth"
        });
        setHambtn(false)
      };


    return(
        <>
        {screenWidth > 768 ?
        <div className="header">
            <img src="logo4.svg" />
            <div className="links">
                <Link to='/'>Accueil</Link>
                <Link to='/services'>Nos Services</Link>
                <Link to='/prices'>Nos tarifs</Link>
                <button onClick={scrollToContact}>Contact</button>
            </div>
        </div>
        :
        hamBtn ?
        <>
        <div className="header">
            <button value={hamBtn} onClick={ToggleBtn} className="togglebtn">|||</button>
            <div className="links">
                <Link to='/'>Accueil</Link>
                <Link to='/services'>Nos Services</Link>
                <Link to='/prices'>Nos tarifs</Link>
                <button onClick={scrollToContact}>Contact</button>
            </div>
        </div>
        </>
        :
        <div className="btnoff">
        <button value={hamBtn} onClick={ToggleBtn} className="togglebtn2">|||</button>
        <img src="logo4.svg" />
        </div>
        }
        </>
    )
}

export default Header