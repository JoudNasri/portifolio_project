import React, { useEffect, useState } from 'react'
import AsideBar from '../AsideBar/AsideBar'
import MainCon from '../MainCon/MainCon'

const HomePage = () => {

    const current_theme = localStorage.getItem('current_theme');
    const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

    useEffect(()=>{
        localStorage.setItem('current_theme' , theme);
    },[theme])

    return (
        <div className={`container${theme}`}>
            <AsideBar theme={theme} setTheme={setTheme} menu = {[{title: "Home" , icon:"fa fa-home" , path:'/'} , {title:"About" , icon:"fa fa-user" , path:'/about'} , {title:"Services" , icon:"fa fa-list" , path:'/services'} , {title: "Portifolio" , icon:"fa fa-briefcase" , path:'/portifolio'} , {title: "Contact", icon:"fa fa-comments" , path: '/contact'}]}/>
            <MainCon/>
        </div>
    )
}

export default HomePage