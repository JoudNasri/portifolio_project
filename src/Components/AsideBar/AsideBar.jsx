import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './AsideBar.css'



const AsideBar = ({ menu , theme , setTheme }) => {

    const toggle_mode = ()=>{
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

    const location = useLocation();
    const [closeMenu, setCloseMenu] = useState(false);

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
    }

    return (
        <div className={closeMenu === false ? "aside" : "aside active"}>
            {/* <img onClick={()=>{toggle_mode()}}  src="src/assets/img/2023236.png" alt="" className='moon' /> */}
            <div className="logo">
                <a href="#"><span>J</span>oud</a>
            </div>
            <div className="burgerContainer active">
                <div className='burgerTrigger' onClick={() => {
                    handleCloseMenu()
                }}></div>
                <div className='burgerMenu'></div>
            </div>
            <ul className="nav" >
                {menu.map((element, index) => {
                    return (
                        <i id='icon' className={element.icon}><li className={location.pathname === "/" ? "active" : ""} key={index}><Link to={element.path}>{element.title}</Link></li></i>
                        
                    )
                })}
            </ul>
        </div >

    )
}



export default AsideBar