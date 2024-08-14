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
                    header.style.backgroundColor = '#fff'
                    header.style.backgroundColor = '#99ccff'
                }
            }
        }
        window.addEventListener('scroll', changeBg)

        return ()=>{
            window.removeEventListener('scroll', changeBg)
        }
    })


    return(
        <>
        {screenWidth > 768 ?
        <div className="header">
            <img src="logo2.png" alt="" />
            <div className="links">
                <Link to='/'>Accueil</Link>
                <Link to='/services'>Nos Services</Link>
                <Link to='/prices'>Nos tarifs</Link>
                <button><Link to='/contact'>Contact</Link></button>
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
                <button><Link to='/contact'>Contact</Link></button>
            </div>
        </div>
        </>
        :
        <div className="btnoff">
        <button value={hamBtn} onClick={ToggleBtn} className="togglebtn">|||</button>
        </div>
        }
        </>
    )
}

export default Header