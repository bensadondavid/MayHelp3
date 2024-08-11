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


    return(
        <>
        {screenWidth > 768 ?
        <div className="header">
            <h1 style={{color: '#b87333', padding : '20px'}}>M</h1>
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