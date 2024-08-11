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

    const [david,setDavid] = useState('David')

    return(
        <>
        {screenWidth > 768 ?
        <div className="header">
            <img src="logo2.png" alt="logo1" />
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
        <button value={hamBtn} onClick={ToggleBtn} className="togglebtn">|||</button>
        }
        </>
    )
}

export default Header