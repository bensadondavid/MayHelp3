import { useState, useEffect } from "react";

const WidthScreen = ()=>{
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [toggleBtn, setToggleBtn] = useState(false);

    useEffect(() => {
        const pageResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', pageResize);

        return () => {
            window.removeEventListener('resize', pageResize);
        };
    }, []);

    return {screenWidth}
}

export default WidthScreen